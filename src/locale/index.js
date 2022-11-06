import { I18n } from "i18n-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ar from "./ar.json";
import en from "./en.json";
import { I18nManager } from "react-native";


const i18n = new I18n({
    en: en,
    ar: ar,
});

i18n.locale = I18nManager.isRTL ? "ar" : "en";
i18n.defaultLocale = I18nManager.isRTL ? "ar" : "en";
AsyncStorage.getItem("lang").then((lang) => {
    i18n.defaultLocale = lang ? lang : I18nManager.isRTL ? "ar" : "en";
    i18n.locale = lang ? lang : I18nManager.isRTL ? "ar" : "en";
});

export default i18n;
