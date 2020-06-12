import React from "react";
import {connect} from "react-redux";
import './air-index-preview.scss';
import {mapPropsToPreviewArray, mapStateToProps} from "./air-index-preview.mapper";
import {AirIndexPreviewLevel, AirIndexPreviewProps} from "./air-index-preview.props";


class AirIndexPreview extends React.Component<AirIndexPreviewProps, any> {

    private get renderIndexes() {
        return mapPropsToPreviewArray(this.props)
            .map((index: AirIndexPreviewLevel) => {
                return (
                    <div className="air-index-preview__container__row">
                        <div className="air-index-preview__container__row__column">
                            {index.label}
                        </div>
                        <div className="air-index-preview__container__row__column">
                            {index.id}
                        {/*    TODO: Move to next component creating stars / other statistics 0-5*/}
                        </div>
                    </div>
                )
            });
    }


    render() {

        const summary = this.props.stIndexLevel.id;

        return (
            <div className="air-index-preview">
                <div className="air-index-preview__header">
                    <div className="air-index-preview__header__label">
                        Summary:
                    </div>
                    <div className="air-index-preview__header__value">
                        {summary}
                    </div>
                </div>
                <div className="air-index-preview__container">
                    {this.renderIndexes}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {} as AirIndexPreviewProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(AirIndexPreview);
