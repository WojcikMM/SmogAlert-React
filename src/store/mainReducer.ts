import {
    FETCH_STATIONS_START,
    FETCH_STATIONS_FAIL,
    FETCH_STATIONS_SUCCESS,
    FETCH_AIR_INDEX_START,
    FETCH_STATIONS_FROM_CACHE,
    FETCH_AIR_INDEX_SUCCESS
} from './actions';
import {
    StationDto,
    AirIndexDto
} from "../clients/dtos";

export interface StoreModel {
    loadingStations: boolean;
    loadingAirIndex: boolean;

    stations: StationDto[];
    selectedStationId: number;

    airIndexModel: AirIndexDto | null;
}

const initialState: StoreModel = {
    loadingStations: false,
    loadingAirIndex: false,
    stations: [] as StationDto[],
    selectedStationId: 0,
    airIndexModel: null
};

export const mainReducer = (state = initialState, action: any) => {
    console.log('Action received: ', action.type);
    switch (action.type) {
        case FETCH_STATIONS_START:
            return {
                ...state,
                loadingStations: true
            } as StoreModel;
        case FETCH_STATIONS_FROM_CACHE:
        case FETCH_STATIONS_SUCCESS:
            return {
                ...state,
                loadingStations: false,
                stations: action.stations
            } as StoreModel;
        case FETCH_STATIONS_FAIL:
            return {
                ...state,
                loadingStations: false,
                stations: []
            } as StoreModel;
        case FETCH_AIR_INDEX_START:
            return {
                ...state,
                selectedStationId: action.selectedStationId,
                loadingIndex: true
            } as StoreModel
        case FETCH_AIR_INDEX_SUCCESS:
            return {
                ...state,
                airIndexModel: action.airIndex,
                loadingIndex: false
            } as StoreModel
        default:
            console.warn(`There is no handler for event: ${action.type}`);
            return state;
    }
};
