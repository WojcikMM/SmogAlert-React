import React from "react";
import './main-view.scss';
import StationsSelector from "../stations-selector/stations-selector";
import AirIndexPreview from "../air-index-preview/air-index-preview";
import { Header } from "../header/header";

class MainView extends React.Component<any, any> {

    render() {
        return (
            <div className="main-view">
                <Header/>
                <StationsSelector/>
                <AirIndexPreview/>
            </div>
        );
    }
}

export default MainView;

/*
TODO: 1. Style components.
TODO: 2. Add function to check nearest station - by html location api [link](https://www.sitepoint.com/community/t/find-record-with-closest-latitude-longitude-from-stringifyed-data-in-localstorage/23845)
TODO: 3. Add translation mechanism to work with multiple languages.
 */
