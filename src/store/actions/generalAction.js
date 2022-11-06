import i18n from "@locale";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "@store";
import { I18nManager } from "react-native";
import { CHANGE_LANG, CHANGE_MODAL_TOASTER, INTRO_SEEN, NETWORK_CHANGED } from "../types";

import RNRestart from 'react-native-restart';


export const chooseLangAction = (lang) => {
    if (lang === "en") {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
    } else {
        I18nManager.allowRTL(true);
        I18nManager.forceRTL(true);
    }

    i18n.locale = lang;
    setLang(lang);
    return {
        type: CHANGE_LANG,
        payload: lang,
    };
};

const setLang = async (lang) => {
    let currentLang = store.getState().general.lang;
    if (currentLang != lang) {
        await AsyncStorage.setItem("lang", lang).then(() => {
            RNRestart.Restart();
        });
    }
};


export const modalToasterAction = (value) => {
    return async (dispatch) => {
        dispatch({
            type: CHANGE_MODAL_TOASTER,
            payload: value,
        });
    };
};

export const networkChangedAction = (value) => {
    return async (dispatch) => {
        dispatch({
            type: NETWORK_CHANGED,
            payload: value,
        });
    };
};


export const setIntroSeenAction = (value) => {
    return async (dispatch) => {
        dispatch({
            type: INTRO_SEEN,
            payload: value,
        });
    };
};

