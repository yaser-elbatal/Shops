import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SText } from "../SText";
import { COLORS, moderateScale } from "@common";

export const AccountGoMessage = ({ firstMess, secondMess, action }) => {
  return (
    <TouchableOpacity
      style={styles.noRegisterAcc}
      onPress={action}
      activeOpacity={0.7}
      hitSlop={{ right: 20, left: 20, top: 20, bottom: 20 }}
    >
      <SText title={firstMess} style={styles.regOne} />
      <SText title={secondMess} style={styles.regTwo} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  noRegisterAcc: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: moderateScale(28),
  },
  regOne: {
    fontSize: moderateScale(14),
    marginEnd: moderateScale(7),
  },
  regTwo: {
    fontSize: moderateScale(14),
    color: COLORS.main,
  },
});
