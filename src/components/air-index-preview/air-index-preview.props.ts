export interface AirIndexPreviewLevel {
    id?: number;
    date: string;
    label: string;
}

export interface AirIndexPreviewTranslations {
    title: string;
    noDataLabel: string;
    tableColumns: AirIndexPreviewTranslationsTableColumns;
}

export interface AirIndexPreviewTranslationsTableColumns {
    type: string;
    value: string;
    date: string;
}

export interface AirIndexPreviewProps {
    indexes: AirIndexPreviewLevel[];
    summaryId?: number;
    summaryDate: string;
    translations: AirIndexPreviewTranslations;
}
