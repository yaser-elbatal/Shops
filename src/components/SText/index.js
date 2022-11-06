import React from "react";
import { Text, StyleSheet, I18nManager } from "react-native";
import { fonts, COLORS, moderateScale } from "@common";

export const SText = ({ title, style, numberOfLines, ...props }) => (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]} {...props}>
        {title}
    </Text>
);

const styles = StyleSheet.create({
    text: {
        fontSize: moderateScale(15),
        color: COLORS.black,
        fontFamily: fonts.regular,
        textAlign: I18nManager.isRTL ? "left" : "left",
    },
});
