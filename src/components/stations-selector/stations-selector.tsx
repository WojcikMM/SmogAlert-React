import {StoreModel} from "../../store/mainReducer";
import {connect} from "react-redux";
import React from "react";
import {StationDto} from "../../clients/dtos";
import {fetchAirIndex, fetchStations} from "../../clients";
import './stations-selector.scss';
import {Select, InputLabel, MenuItem} from "@material-ui/core";

class StationsSelector extends React.Component<any, any> {

    private readonly labelId = 'stations-selector-label';

    componentDidMount() {
        this.props.fetchStations();
    }

    render() {

        return (
            <div>
                <InputLabel id={this.labelId}>Stations</InputLabel>
                <Select label={this.labelId}
                        className="stations-selector"
                        value={this.props.selectedStationId}
                        onChange={this.props.handleStationChange}>
                    <MenuItem value=""></MenuItem>
                    {this.props.options.map((option: StationDto) =>
                        (<MenuItem value={option.id}>{option.stationName}</MenuItem>)
                    )}
                </Select>
            </div>
            // <select className="stations-selector"
            //         value={this.props.selectedStationId}
            //         onChange={this.props.handleStationChange}>
            //     <option key="" value=""/>
            //     {this.options}
            // </select>
        );
    }

    private get options() {
        return this.props.options.map((option: StationDto) => {
            return (<MenuItem value={option.id}>{option.stationName}</MenuItem>);
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
