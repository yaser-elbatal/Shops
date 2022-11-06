import React from "react";
import { StyleSheet, TextInput, Platform, View, I18nManager } from "react-native";
import { padding, sizes, lineHeights } from "../config";
import { COLORS, fonts, IS_IOS, moderateScale } from "../../common";

const InputBasic = ({
  placeholderTextColor,
  style,
  multiline = false,
  numberOfLines,
  inputRef,
  ...rest
}) => {
  return (
    <TextInput
      {...rest}
      ref={inputRef}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : COLORS.placeholder
      }
      multiline={multiline}
      numberOfLines={multiline ? numberOfLines : 1}
      style={[
        styles.input,
        multiline && styles.inputMultiline,
        multiline && {
          height: moderateScale(numberOfLines * 20 + 2 * padding.base),
        },
        style && style,
      ]}
      selectionColor={COLORS.mainLight}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: moderateScale(sizes.h5),
    // lineHeight: moderateScale(lineHeights.base),
    textAlignVertical: "center",
    ...Platform.select({
      android: {
        textAlign: I18nManager.isRTL ? "right" : "left",
      },
      ios: {
        // writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
        textAlign: I18nManager.isRTL ? "right" : "left",

      },
    }),
    fontFamily: fonts.Medium,
    color: COLORS.textBlack,
    flex: 1,
  },
  inputMultiline: {
    textAlignVertical: "top",
    paddingVertical: moderateScale(padding.base + 3),

  },
});

InputBasic.defaultProps = {
  autoCapitalize: "none",
  underlineColorAndroid: "transparent",
  numberOfLines: 1,
  multiline: IS_IOS ? false : true,
  textAlignVertical: "center",
  autoCorrect: false,
  autoFocus: false,
};

export default InputBasic;
