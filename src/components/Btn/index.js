import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  View,
  ActivityIndicator,
  Image,
} from "react-native";
import { COLORS, CommonStyle, width } from "@common";
import { SText } from "../SText";
import * as Animatable from "react-native-animatable";
import { moderateScale, scale, verticalScale } from "@common";

export const Btn = ({
  text,
  btnStyle,
  textStyle,
  loading,
  loaderColor,
  value,
  image,
  disable = false,
  animation,
  delay,
  containerStyle,
  ...props
}) => {
  return (
    <Animatable.View style={containerStyle} animation={animation} delay={delay}>
      {disable ? (
        <View style={[styles.ownStyle, styles.disableBtn, btnStyle]}>
          <SText style={[styles.btnS, textStyle]} title={text} />
        </View>
      ) : loading ? (
        <View style={[styles.ownStyle, btnStyle]}>
          <ActivityIndicator color={loaderColor || COLORS.white} />
        </View>
      ) : image ? (
        <TouchableOpacity
          style={[styles.ownStyle, btnStyle]}
          {...props}
          activeOpacity={0.85}
        >
          <Image source={image} style={styles.img} />
        </TouchableOpacity>
      ) : value ? (
        <TouchableOpacity
          style={[styles.ownStyle, btnStyle]}
          {...props}
          activeOpacity={0.85}
        >
          <View style={[{ ...CommonStyle.rowSpace }, styles.width]}>
            <SText style={[styles.btnS, textStyle]} title={text} />
            <SText style={[styles.btnS, textStyle]} title={value} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.ownStyle, btnStyle]}
          {...props}
          activeOpacity={0.85}
        >
          <SText style={[styles.btnS, textStyle]} title={text} />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  ownStyle: {
    backgroundColor: COLORS.main,
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOffset: { height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 1,
      },
    }),
    paddingVertical: moderateScale(13),
    width: width * 0.8,
    alignSelf: "center",
    minHeight: verticalScale(65),
    margin: moderateScale(7),
    overflow: "hidden",
  },
  btnS: {
    color: COLORS.white,
    fontSize: moderateScale(15),
  },
  width: {
    width: "90%",
  },
  img: {
    height: verticalScale(33),
    width: "30%",
    resizeMode: "cover",
  },
  disableBtn: {
    opacity: 0.5,
  },
});
