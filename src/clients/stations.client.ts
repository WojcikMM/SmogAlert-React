import { StationDto } from "./dtos";
import {
    createFetchStationsFailAction,
    createFetchStationsStartAction,
    createFetchStationsSuccessAction,
    createFetchStationsFromCacheAction
} from "../store/actions";
import {CONST} from "../const";
import { getActualLocation } from "./location-api.client";

const compare = (prev: StationDto, next: StationDto) => {
    const prevValue = prev.stationName.toLowerCase();
    const nextValue = next.stationName.toLowerCase();

    return prevValue > nextValue ? 1 : prevValue < nextValue ? -1 : 0;
}

export const fetchStations = () => {
    return ((dispatch: any) => {


        if (localStorage.getItem(CONST.LOCAL_STORAGE_KEYS.STATIONS_ARRAY) !== null) {
            const stationsDto = JSON.parse(localStorage.getItem(CONST.LOCAL_STORAGE_KEYS.STATIONS_ARRAY) || '[]');
            dispatch(createFetchStationsFromCacheAction(stationsDto));
            getActualLocation(dispatch, stationsDto);

        } else {
            dispatch(createFetchStationsStartAction());
            fetch(CONST.API_URLS.GET_STATIONS)
                .then((result: any) => result.json())
                .then((stationsDto: StationDto[]) => stationsDto.sort(compare))
                .then((orderedStationsDto: StationDto[]) => {
                    localStorage.setItem(CONST.LOCAL_STORAGE_KEYS.STATIONS_ARRAY, JSON.stringify(orderedStationsDto));
                    dispatch(createFetchStationsSuccessAction(orderedStationsDto));
                    getActualLocation(dispatch, orderedStationsDto);
                    return orderedStationsDto;
                })
                .catch(err => dispatch(createFetchStationsFailAction(err)));
        }
    });
};
