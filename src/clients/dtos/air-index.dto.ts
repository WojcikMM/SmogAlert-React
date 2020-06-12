export interface AirIndexDto {
    id: number;

    c6h6IndexLevel: IndexLevelDto;
    c6h6SourceDataDate: string;
    /*
    IndexLevel: IndexLevelDto;
    SourceDataDate: string;
    */
    coIndexLevel: IndexLevelDto;
    coSourceDataDate: string;

    no2IndexLevel: IndexLevelDto;
    no2SourceDataDate: string;

    o3IndexLevel: IndexLevelDto;
    o3SourceDataDate: string;

    pm10IndexLevel: IndexLevelDto;
    pm10SourceDataDate: string;

    pm25IndexLevel: IndexLevelDto;
    pm25SourceDataDate: string;

    so2IndexLevel: IndexLevelDto;
    so2SourceDataDate: string;


    stSourceDataDate: string,
    stIndexLevel: IndexLevelDto;
}

export interface IndexLevelDto {
    id: number;
    indexLevelName: string;
}
