import React from 'react';
import {Provider} from 'react-redux';
import MainView from "./components/main-view/main-view";
import {store} from "./store/store";

class App extends React.Component<any, any> {

    render() {
        return (
            <Provider store={store}>
                <MainView/>
            </Provider>
        );
    }
}

export default App;
