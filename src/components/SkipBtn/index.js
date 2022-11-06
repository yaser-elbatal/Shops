import React from "react";
import { StyleSheet, I18nManager } from "react-native";
import { COLORS, moderateScale } from "@common";
import { Btn } from "../Btn";
import i18n from "@locale";
import * as Animatable from "react-native-animatable";

export const SkipBtn = ({ onPress, text, containerStyle }) => {
  return (
    <Animatable.View
      style={[styles.transparentView, containerStyle]}
      animation={I18nManager.isRTL ? "fadeInRight" : "fadeInLeft"}
    >
      <Btn
        onPress={onPress}
        text={text || i18n.t("skip")}
        btnStyle={styles.transparentBtn}
        textStyle={styles.btnStyleText}
      />
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  transparentView: {
    position: "absolute",
    top: moderateScale(10),
    start: moderateScale(10),
    zIndex: 999,
  },
  transparentBtn: {
    width: null,
    elevation: 0,
    backgroundColor: COLORS.bgOpacity,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    minHeight: null,
    // alignSelf: "flex-start",
  },
  btnStyleText: {
    color: COLORS.white,
    textAlign: "center",
  },
});
