import React from "react";
import {connect} from "react-redux";
import './air-index-preview.scss';
import {mapPropsToPreviewArray, mapStateToProps} from "./air-index-preview.mapper";
import {AirIndexPreviewLevel, AirIndexPreviewProps} from "./air-index-preview.props";
import {AirIndexDescription} from "../air-index-description/air-index-description";


class AirIndexPreview extends React.Component<AirIndexPreviewProps, any> {

    private get renderIndexes() {
        return mapPropsToPreviewArray(this.props)
            .map((index: AirIndexPreviewLevel) => {
                return (
                    <div key={index.label} className="air-index-preview__container__row">
                        <div className="air-index-preview__container__row__column">
                            {index.label}
                        </div>
                        <div className="air-index-preview__container__row__column">
                            <AirIndexDescription indexId={index.id}/>
                        </div>
                    </div>
                )
            });
    }


    render() {
        return (
            <div className="air-index-preview">
                <div className="air-index-preview__header">
                    <div className="air-index-preview__header__label">
                        Summary:
                    </div>
                    <div className="air-index-preview__header__value">
                        <AirIndexDescription indexId={this.props.stIndexLevel.id}/>
                    </div>
                </div>
                <div className="air-index-preview__container">
                    <div className="air-index-preview__container__label">Details:</div>
                    {this.renderIndexes}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AirIndexPreview);
