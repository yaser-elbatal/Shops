import React from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { COLORS, detectLocation, Fontisto, height } from "../../common";
import { moderateScale, scale } from "../../common/Scalling";
import { Icon } from "../Icon";
import { showToaster } from "../Toaster";

export const LocateMe = ({ onPress }) => {
  const handlePress = async () => {
    let res = await detectLocation();
    if (res.type === "failed") {
      showToaster({ message: i18n.t("map.openGPS") });
    } else {
      onPress && onPress(res);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Icon name={Fontisto.compass} type="Fontisto" iconStyle={styles.icon} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: moderateScale(10),
    left: moderateScale(8),
    backgroundColor: COLORS.black,
    padding: moderateScale(10),
    borderRadius: 50,
    overflow: "hidden",
  },
  icon: {
    fontSize: moderateScale(25),
    color: COLORS.white,
  },
});
