export interface StationDto {
    id: number;
    stationName: string;
    gegrLat: string;
    gegrLon: string;
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
