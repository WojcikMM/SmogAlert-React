import {
    createFetchAirIndexFailAction,
    createFetchAirIndexStartAction,
    createFetchAirIndexSuccessAction
} from "../store/actions";
import {CONST} from "../const";
import {AirIndexDto} from "./dtos";

export const fetchAirIndex = (stationId: number) => {
    return ((dispatch: any) => {
        if (!stationId) {
            dispatch(createFetchAirIndexFailAction(new Error('Invalid stationId.')));
        } else {
            localStorage.setItem(CONST.LOCAL_STORAGE_KEYS.SELECTED_STATION_ID, stationId.toString());
            dispatch(createFetchAirIndexStartAction(stationId));
            return fetch(`${CONST.API_URLS.GET_AIR_INDEX}/${stationId}`)
                .then((result: any) => result.json())
                .then((airIndexDto: AirIndexDto) => {
                    return dispatch(createFetchAirIndexSuccessAction(airIndexDto))
                })
                .catch(err => {
                    return dispatch(createFetchAirIndexFailAction(err))
                })
        }
    })
}
