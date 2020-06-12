import {StoreModel} from "../../store/mainReducer";
import {AirIndexPreviewProps} from "./air-index-preview.props";
import {CONST} from "../../const";

export const mapStateToProps = (state: StoreModel) => {
    return {
        c6IndexLevel: {
            id: state.airIndexModel?.c6h6IndexLevel?.id,
            date: state.airIndexModel?.c6h6SourceDataDate,
            label: CONST.LABELS.PREVIEW.INDEXES.C6H6
        },
        coIndexLevel:{
            id:  state.airIndexModel?.coIndexLevel?.id,
            date: state.airIndexModel?.coSourceDataDate,
            label: CONST.LABELS.PREVIEW.INDEXES.CO
        },
        no2IndexLevel:{
            id:  state.airIndexModel?.no2IndexLevel?.id,
            date: state.airIndexModel?.no2SourceDataDate,
            label: CONST.LABELS.PREVIEW.INDEXES.NO2
        },
        o3IndexLevel: {
            id: state.airIndexModel?.o3IndexLevel?.id,
            date: state.airIndexModel?.o3SourceDataDate,
            label: CONST.LABELS.PREVIEW.INDEXES.O3
        },
        pm10IndexLevel: {
            id: state.airIndexModel?.pm10IndexLevel?.id,
            date: state.airIndexModel?.pm10SourceDataDate,
            label: CONST.LABELS.PREVIEW.INDEXES.PM10
        },
        pm25IndexLevel: {
            id: state.airIndexModel?.pm25IndexLevel?.id,
            date: state.airIndexModel?.pm25SourceDataDate,
            label: CONST.LABELS.PREVIEW.INDEXES.PM25
        },
        soIndexLevel: {
            id: state.airIndexModel?.so2IndexLevel?.id,
            date: state.airIndexModel?.so2SourceDataDate,
            label: CONST.LABELS.PREVIEW.INDEXES.SO
        },
        stIndexLevel: {
            id: state.airIndexModel?.stIndexLevel?.id,
            date: state.airIndexModel?.stSourceDataDate,
            label: CONST.LABELS.PREVIEW.INDEXES.ST
        },
    } as AirIndexPreviewProps;
}


export const mapPropsToPreviewArray = (props: AirIndexPreviewProps) => {
    return [
        props.no2IndexLevel,
        props.c6IndexLevel,
        props.coIndexLevel,
        props.o3IndexLevel,
        props.pm10IndexLevel,
        props.pm25IndexLevel,
        props.soIndexLevel
    ]
}
