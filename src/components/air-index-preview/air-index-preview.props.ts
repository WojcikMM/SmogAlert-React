export interface AirIndexPreviewLevel {
    id?: number;
    date: string;
    label: string;
}

export interface AirIndexPreviewProps {
    c6IndexLevel: AirIndexPreviewLevel;
    coIndexLevel: AirIndexPreviewLevel;
    no2IndexLevel: AirIndexPreviewLevel;
    o3IndexLevel: AirIndexPreviewLevel;
    pm10IndexLevel: AirIndexPreviewLevel;
    pm25IndexLevel: AirIndexPreviewLevel;
    soIndexLevel: AirIndexPreviewLevel;
    stIndexLevel: AirIndexPreviewLevel;
}
