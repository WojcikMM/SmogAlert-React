import {AirIndexDto, StationDto} from "../clients";

// STATIONS - ACTION TYPES

export const FETCH_STATIONS_START = 'FETCH_STATIONS_START';
export const FETCH_STATIONS_SUCCESS = 'FETCH_STATIONS_SUCCESS';
export const FETCH_STATIONS_FAIL = 'FETCH_STATIONS_FAIL';
export const FETCH_STATIONS_FROM_CACHE = 'FETCH_STATIONS_FROM_CACHE';

// AIR INDEX - ACTION TYPES

export const FETCH_AIR_INDEX_START = 'FETCH_AIR_INDEX_START';
export const FETCH_AIR_INDEX_SUCCESS = 'FETCH_AIR_INDEX_SUCCESS';
export const FETCH_AIR_INDEX_FAILS = 'FETCH_AIR_INDEX_FAILS';

// LOCATIONS API

export const LOCATION_CHANGED = 'LOCATION_CHANGED';

// STATIONS - action creators

/**
 * Action creator of 'FETCH_STATIONS_START'
 */
export const createFetchStationsStartAction = () => {
    return {
        type: FETCH_STATIONS_START
    };
}

/**
 * Action creator of 'FETCH_STATIONS_SUCCESS'
 * @param stations
 */
export const createFetchStationsSuccessAction = (stations: StationDto[]) => {
    return {
        type: FETCH_STATIONS_SUCCESS,
        stations: stations
    }
}

export const createFetchStationsFromCacheAction = (stations: StationDto[]) => {
    return {
        type: FETCH_STATIONS_FROM_CACHE,
        stations: stations
    }
}


/**
 * Action creator of 'FETCH_STATIONS_FAIL'
 * @param cause
 */
export const createFetchStationsFailAction = (cause: Error) => {
    return {
        type: FETCH_STATIONS_FAIL,
        cause
    }
}

// AIR INDEX - action creators

/**
 * Action creator of 'FETCH_AIR_INDEX_START'
 * @param selectedStationId
 */
export const createFetchAirIndexStartAction = (selectedStationId: number) => {
    return {
        type: FETCH_AIR_INDEX_START,
        selectedStationId
    }
}

/**
 * Action creator of
 * @param airIndex
 */
export const createFetchAirIndexSuccessAction = (airIndex: AirIndexDto) => {
    return {
        type: FETCH_AIR_INDEX_SUCCESS,
        airIndex
    }
}

/**
 * Action creator of 'FETCH_AIR_INDEX_FAILS'
 * @param cause
 */
export const createFetchAirIndexFailAction = (cause: Error) => {
    return {
        type: FETCH_AIR_INDEX_FAILS,
        cause
    }
}

// LOCATION API

/**
 * Action creator of  'LOCATION_CHANGED'
 * @param latitude
 * @param longitude
 */
export const createLocationChangedAction = (latitude: number, longitude: number) => {
    return {
        type: LOCATION_CHANGED,
        latitude,
        longitude
    }
}
