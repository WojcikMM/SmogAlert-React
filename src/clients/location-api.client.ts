import {StationDto} from "./dtos";
import {CONST} from "../const";
import {fetchAirIndex} from "./air-index.client";

export const getActualLocation = (dispatch: any, stations: StationDto[]) => {
    if (navigator.geolocation && dispatch === null) {
        navigator.geolocation.getCurrentPosition((position => {
            console.log('Actual state:', stations);
        }));
    } else if (localStorage.getItem(CONST.LOCAL_STORAGE_KEYS.SELECTED_STATION_ID) !== null) {
        const selectedStationId = +(localStorage.getItem(CONST.LOCAL_STORAGE_KEYS.SELECTED_STATION_ID) || '')
        fetchAirIndex(selectedStationId)(dispatch);
    } else {
        console.log('Nothing.');
    }
}
