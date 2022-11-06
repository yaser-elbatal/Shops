import { I18nManager } from "react-native";
import {
    CHANGE_LANG,
    CHANGE_MODAL_TOASTER,
    INTRO_SEEN,
    NETWORK_CHANGED,
} from "../types";

const INITIAL_STATE = {
    lang: null,
    modalToaster: false,
    network: true,
    introSeen: false,

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_LANG:
            return { ...state, lang: action.payload };

        case CHANGE_MODAL_TOASTER:
            return {
                ...state,
                modalToaster: action.payload,
            };
        case NETWORK_CHANGED:
            return {
                ...state,
                network: action.payload,
            };

        case INTRO_SEEN:
            return {
                ...state,
                introSeen: action.payload,
            };
        default:
            return state;
    }
};
