import React from 'react';
import {Provider} from 'react-redux';
import {store} from "./store/store";
import './app.scss';
import {InitializePayload, LocalizeProvider} from "react-localize-redux";
import {languages, translation} from './translations.json';
import Header from "./components/header/header";
import StationsSelector from "./components/stations-selector/stations-selector";
import AirIndexPreview from "./components/air-index-preview/air-index-preview";

class App extends React.Component<any, any> {

    defaultTranslations = {
        languages,
        translation,
        options: {
            renderToStaticMarkup: false
        }
    } as InitializePayload;

    render() {
        return (
            <Provider store={store}>
                <LocalizeProvider store={store} initialize={this.defaultTranslations}>
                    <Header/>
                    <StationsSelector/>
                    <AirIndexPreview/>
                </LocalizeProvider>
            </Provider>
        );
    }
}

export default App;
