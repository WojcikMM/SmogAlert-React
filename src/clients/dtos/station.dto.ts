export interface StationDto {
    id: number;
    stationName: string;
    gegrLat: number;
    gegrLon: number;
    city: City;
    addressStreet: string;
}

export interface City {
    id: number;
    name: string;
    commune: Commune;
}

export interface Commune {
    communeName: string;
    districtName: string;
    provinceName: string;
}
