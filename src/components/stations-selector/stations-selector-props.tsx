import {ChangeEvent, ReactNode} from "react";
import {StationDto} from "../../clients/dtos";

export interface StationsSelectorProps {
    fetchStations: () => void;
    handleStationChange: (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>, child?: ReactNode) => void;
    selectedStationId: number;
    stations: StationDto[];
    label: string;
}
