export const CONST = {
    LOCAL_STORAGE_KEYS: {
        SELECTED_STATION_ID: 'SELECTED_STATION_ID',
        STATIONS_ARRAY: 'STATIONS_ARRAY'
    },
    API_URLS: {
        GET_STATIONS: 'https://cors-anywhere.herokuapp.com/api.gios.gov.pl/pjp-api/rest/station/findAll',
        GET_AIR_INDEX: 'https://cors-anywhere.herokuapp.com/api.gios.gov.pl/pjp-api/rest/aqindex/getIndex'
    },
    DEFAULTS: {
        INDEX_LEVEL: 3
    },
    LABELS: {
        PREVIEW: {
            INDEXES: {
                NO2: 'NO2',
                C6H6: 'C6H6',
                CO: 'CO',
                O3: 'O3',
                PM10: 'PM 10',
                PM25: 'PM 2.5',
                SO: 'SO',
                ST: 'Summary'
            }
        }
    }
}
