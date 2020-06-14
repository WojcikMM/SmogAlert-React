import {LocalizeState} from "react-localize-redux";
import {MainState} from "./mainReducer";

export interface StoreModel {
    localize: LocalizeState,
    main: MainState
}
