import {connect} from "react-redux";
import React, {ChangeEvent} from "react";
import {StationDto} from "../../clients/dtos";
import {fetchAirIndex, fetchStations} from "../../clients";
import './stations-selector.scss';
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import {StoreModel} from "../../store/store.model";
import {getTranslate} from "react-localize-redux";
import {StationsSelectorProps} from "./stations-selector-props";


class StationsSelector extends React.Component<StationsSelectorProps, any> {

    private readonly labelId = 'stations-selector-label';

    componentDidMount() {
        this.props.fetchStations();
    }

    render() {

        return (
            <React.Fragment>
                <InputLabel id={this.labelId}>{this.props.label}</InputLabel>
                <Select label={this.labelId}
                        className="stations-selector"
                        value={this.props.selectedStationId}
                        onChange={this.props.handleStationChange}>
                    <MenuItem disabled={true} value="0"/>
                    {this.props.stations.map((option: StationDto) =>
                        (<MenuItem key={option.id} value={option.id}>{option.stationName}</MenuItem>)
                    )}
                </Select>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: StoreModel) => {
    return {
        stations: state.main.stations,
        selectedStationId: state.main.selectedStationId,
        label: getTranslate(state.localize)('stationsSelectorLabel')
    } as StationsSelectorProps;
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchStations: (): void => dispatch(fetchStations()),
        handleStationChange: (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => dispatch(fetchAirIndex(event.target.value as number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StationsSelector);
