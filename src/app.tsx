import React from 'react';
import {Provider} from 'react-redux';
import MainView from "./components/main-view/main-view";
import {store} from "./store/store";
import './app.scss';
import {InitializePayload, LocalizeProvider} from "react-localize-redux";
import {languages, translation} from '../public/translations.json';

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
                    <MainView/>
                </LocalizeProvider>
            </Provider>
        );
    }
}

export default App;
