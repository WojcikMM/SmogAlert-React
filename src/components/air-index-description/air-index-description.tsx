import React from "react";
import {AirIndexDescriptionProps} from "./air-index-description-props";
import {Rating} from '@material-ui/lab';


export class AirIndexDescription extends React.Component<AirIndexDescriptionProps, any> {
    render() {
        return (
            <span>
                {this.props.indexId !== undefined ?
                    <Rating value={ 5 - this.props.indexId} readOnly/> :
                    <div>{this.props.noDataLabel}</div>
                }
            </span>
        );
    }
}
