import { Dimensions, Platform, Share } from "react-native";
import { moderateScale } from "./Scalling";

export const Constants = {
  baseURL: "",
  phoneCode: "+966",
};

export const { width, height } = Dimensions.get("window");

export const IS_IPHONE_X =
  (height === 812 || height === 896) && Platform.OS === "ios";

export const IS_IOS = Platform.OS === "ios";


export const fonts = {
  regular: "Cairo-Regular",
  Medium: "Cairo-Medium",
  bold: 'Cairo-Bold',
  extraBold: 'Cairo-ExtraBold',
  extraLight: 'Cairo-ExtraLight',
  black: 'Cairo-Black',
  light: 'Cairo-Light',
  semibold: 'Cairo-Semibold',

};

export const hitSlop = (value) => ({
  right: moderateScale(value),
  left: moderateScale(value),
  top: moderateScale(value),
  bottom: moderateScale(value),
});

export const convertNumbersToEn = (number) =>
  number
    .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
      return d.charCodeAt(0) - 1632;
    })
    .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
      return d.charCodeAt(0) - 1776;
    });



export const map = {
  apiKey: "AIzaSyCJTSwkdcdRpIXp2yG7DfSRKFWxKhQdYhQ",
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
  ksaLocation: {
    latitude: 24.25554774134379,
    latitudeDelta: 29.114140601961836,
    longitude: 44.74909560754895,
    longitudeDelta: 15.429050289094441,
  },
};

export const shareFn = (i18n, data) => {
  const storeLink =
    Platform.OS == "ios" ? "YourAppleStoreLinkHere" : "YourPlayStoreLinkHere";

  Share.share(
    {
      message:
        data?.message ||
        `${i18n.t("common.appName")} \n ${data?.url || storeLink}`,
      title: data?.title || i18n.t("common:shareApp"),
      url: data?.url || storeLink,
    },
    {
      subject: data?.subject || "Default Message Here About App Here",
      dialogTitle: data?.dialogTitle || i18n.t("common.appName"),
    }
  );
};


