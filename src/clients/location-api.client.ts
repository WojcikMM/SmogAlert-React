import {StationDto} from "./dtos";
import {CONST} from "../const";
import {fetchAirIndex} from "./air-index.client";

export const getActualLocation = (dispatch: any, stations: StationDto[]) => {
    const localStorageStationId = +(localStorage.getItem(CONST.LOCAL_STORAGE_KEYS.SELECTED_STATION_ID) || '');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: Position) => {
           const closestStation =  closestLocation(position, stations);
           fetchAirIndex(closestStation.id)(dispatch)
        }, () => {
            fetchFromLocalStorage(dispatch);
        });
    } else if (localStorageStationId) {
        fetchFromLocalStorage(dispatch);
    }
}

function fetchFromLocalStorage(dispatch: any){
    const localStorageStationId = +(localStorage.getItem(CONST.LOCAL_STORAGE_KEYS.SELECTED_STATION_ID) || '');
    if(localStorageStationId){
        fetchAirIndex(localStorageStationId)(dispatch);
    }
}

function closestLocation(targetLocation: Position, stations: StationDto[]) {
    function vectorDistance(dx: number, dy: number) {
        return Math.sqrt(dx * dx + dy * dy);
    }


    function locationDistance(actualPosition: Position, stationDto: StationDto) {
        const dx = actualPosition.coords.latitude - stationDto.gegrLat;
        const dy = actualPosition.coords.longitude - stationDto.gegrLon;

        return vectorDistance(dx, dy);
    }

    return stations.reduce(function (prev: StationDto, curr: StationDto) {

        const prevDistance = locationDistance(targetLocation, prev);
        const currDistance = locationDistance(targetLocation, curr);
        return (prevDistance < currDistance) ? prev : curr;
    });
}
