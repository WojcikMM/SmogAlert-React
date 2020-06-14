import {CONST} from "../../const";
import {StoreModel} from "../../store/store.model";
import {AirIndexPreviewProps} from "./air-index-preview.props";
import {getTranslate} from "react-localize-redux";

export const mapStateToProps = (state: StoreModel) => {
    const translate = getTranslate(state.localize);
    return {
        indexes: [
            {
                id: state.main.airIndexModel?.c6h6IndexLevel?.id,
                date: state.main.airIndexModel?.c6h6SourceDataDate,
                label: CONST.LABELS.PREVIEW.INDEXES.C6H6
            },
            {
                id: state.main.airIndexModel?.coIndexLevel?.id,
                date: state.main.airIndexModel?.coSourceDataDate,
                label: CONST.LABELS.PREVIEW.INDEXES.CO
            },
            {
                id: state.main.airIndexModel?.no2IndexLevel?.id,
                date: state.main.airIndexModel?.no2SourceDataDate,
                label: CONST.LABELS.PREVIEW.INDEXES.NO2
            },
            {
                id: state.main.airIndexModel?.o3IndexLevel?.id,
                date: state.main.airIndexModel?.o3SourceDataDate,
                label: CONST.LABELS.PREVIEW.INDEXES.O3
            },
            {
                id: state.main.airIndexModel?.pm10IndexLevel?.id,
                date: state.main.airIndexModel?.pm10SourceDataDate,
                label: CONST.LABELS.PREVIEW.INDEXES.PM10
            },
            {
                id: state.main.airIndexModel?.pm25IndexLevel?.id,
                date: state.main.airIndexModel?.pm25SourceDataDate,
                label: CONST.LABELS.PREVIEW.INDEXES.PM25
            },
            {
                id: state.main.airIndexModel?.so2IndexLevel?.id,
                date: state.main.airIndexModel?.so2SourceDataDate,
                label: CONST.LABELS.PREVIEW.INDEXES.SO
            }
        ],
        summaryId: state.main.airIndexModel?.stIndexLevel?.id,
        summaryDate: state.main.airIndexModel?.stSourceDataDate,
        translations: {
            title: translate('airIndexPreviewTitle'),
            noDataLabel: translate('airIndexDescriptionNoData'),
            tableColumns: {
                type: translate('airIndexPreviewTableColumnType'),
                value: translate('airIndexPreviewTableColumnValue'),
                date: translate('airIndexPreviewTableColumnDate')
            }
        }
    } as AirIndexPreviewProps;
}
