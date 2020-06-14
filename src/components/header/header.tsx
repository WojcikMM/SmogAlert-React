import React from "react";
import {connect} from "react-redux";
import {StoreModel} from "../../store/store.model";
import {getTranslate} from "react-localize-redux";
import {HeaderProps} from "./headerProps";

class Header extends React.Component<HeaderProps, any> {
    render() {
        return (
            <div>
                <h1>Smog Alert</h1>
                <p>{this.props.subHeader}</p>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreModel) => {
    return {
        subHeader: getTranslate(state.localize)('subHeader')
    } as HeaderProps;
}

export default connect(mapStateToProps)(Header);
