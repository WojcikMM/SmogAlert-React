import {StoreModel} from "../../store/mainReducer";
import {connect} from "react-redux";
import React from "react";
import {StationDto} from "../../clients/dtos";
import {fetchAirIndex, fetchStations} from "../../clients";

class StationsSelector extends React.Component<any, any> {
    componentDidMount() {
        this.props.fetchStations();
    }
    render() {

        return (
            <select value={this.props.selectedStationId} onChange={this.props.handleStationChange}>
                <option key="" value=""/>
                {this.options}
            </select>
        );
    }

    private get options() {
       return this.props.options.map((option: StationDto) => {
            return (<option key={`${option.id}`} value={option.id}>{option.stationName}</option>);
        });
    }
}

const mapStateToProps = (state: StoreModel) => {
    return {
        options: state.stations,
        selectedStationId: state.selectedStationId
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchStations: () => dispatch(fetchStations()),
        handleStationChange: (event: any) => dispatch(fetchAirIndex(event.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsSelector);
