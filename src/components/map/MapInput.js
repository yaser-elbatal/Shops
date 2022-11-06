import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { I18nManager, Platform } from "react-native";
import { COLORS, map, fonts } from "../../common";
import i18n from "@locale";
import { height, moderateScale } from "../../common/Scalling";

export const MapInput = ({ notifyChange, ...props }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={i18n.t("map.searchInMap")}
      minLength={2}
      returnKeyType={"search"}
      // listViewDisplayed={"auto"}
      fetchDetails={true}
      onPress={(data, details = null) => {
        notifyChange && notifyChange(details?.geometry?.location);
      }}
      query={{
        key: map?.apiKey,
        language: "ar",
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={200}
      styles={style}
      keyboardShouldPersistTaps="handled"
      textInputProps={{
        autoFocus: true,
      }}
      {...props}
    />
  );
};

let style = {
  textInputContainer: {
    backgroundColor: "rgba(0,0,0,0)",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: "90%",
    alignSelf: "center",
  },
  textInput: {
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: COLORS.grey,
    fontSize: moderateScale(15),
    fontFamily: fonts.regular,
    color: COLORS.black,
    textAlign: I18nManager.isRTL ? "right" : "left",
    fontWeight: "normal",
  },
  row: {
    flexWrap: "wrap",
  },
  description: {
    color: COLORS.grey,
    textAlign: I18nManager.isRTL
      ? Platform.OS === "ios"
        ? "right"
        : null
      : "left",
    width: "90%",
    maxWidth: "90%",
  },
  loader: {
    color: COLORS.main,
  },
  listView: {
    // maxHeight: height * 0.5,
    maxHeight: height * 0.35,
    backgroundColor: "rgba(255,255,255,.85)",
    width: "90%",
    alignSelf: "center",
    zIndex: 999,
  },
};
