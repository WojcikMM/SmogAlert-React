import React from "react";

export interface AirIndexDescriptionProps {
    indexId?: number;
}


export class AirIndexDescription extends React.Component<AirIndexDescriptionProps, any> {
    render() {
        return (
            <div>
                {this.props.indexId === undefined && <span>No data.</span>}
                {this.props.indexId === 0 && <span>Excellent</span>}
                {this.props.indexId === 1 && <span>Good</span>}
                {this.props.indexId === 2 && <span>Moderate</span>}
                {this.props.indexId === 3 && <span>Low</span>}
                {this.props.indexId === 4 && <span>Bad</span>}
                {this.props.indexId === 5 && <span>Very bad.</span>}
            </div>
        );
    }
}
