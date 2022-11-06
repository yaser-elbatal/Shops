import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "@common";

export const BgView = ({ style }) => {
  return <View style={[styles.bg, style]} />;
};

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.bgOpacity,
  },
});
