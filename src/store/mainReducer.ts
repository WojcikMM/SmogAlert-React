import {
    FETCH_STATIONS_START,
    FETCH_STATIONS_FAIL,
    FETCH_STATIONS_SUCCESS,
    FETCH_AIR_INDEX_START,
    FETCH_STATIONS_FROM_CACHE,
    FETCH_AIR_INDEX_SUCCESS, FETCH_AIR_INDEX_FAILS
} from './actions';
import {
    StationDto,
    AirIndexDto
} from "../clients/dtos";

export interface MainState {
    loadingStations: boolean;
    loadingAirIndex: boolean;

    stations: StationDto[];
    selectedStationId: number;

    airIndexModel: AirIndexDto | null;
}

const initialState: MainState = {
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
            } as MainState;
        case FETCH_STATIONS_FROM_CACHE:
        case FETCH_STATIONS_SUCCESS:
            return {
                ...state,
                loadingStations: false,
                stations: action.stations
            } as MainState;
        case FETCH_STATIONS_FAIL:
            return {
                ...state,
                loadingStations: false,
                stations: []
            } as MainState;
        case FETCH_AIR_INDEX_START:
            return {
                ...state,
                selectedStationId: action.selectedStationId,
                loadingAirIndex: true
            } as MainState
        case FETCH_AIR_INDEX_SUCCESS:
            return {
                ...state,
                airIndexModel: action.airIndex,
                loadingAirIndex: false
            } as MainState
        case FETCH_AIR_INDEX_FAILS:
            return {
                ...state,
                loadingAirIndex: false,
                selectedStationId: 0
            }
        default:
            console.warn(`There is no handler for event: ${action.type}`);
            return state;
    }
};
