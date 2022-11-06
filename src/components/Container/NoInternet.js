import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { COLORS, width, height, Images, fonts } from "../../common";
import { SText } from "../SText";
import i18n from "@locale";
import { moderateScale, verticalScale } from "../../common/Scalling";

const NoInternet = ({ }) => {
  // let animateLotties;

  // useEffect(() => {
  //   animateLotties.play();
  // }, []);

  return (
    <View style={[styles.container]}>
      {/* <Image source={Images.noWifi} style={styles.img} /> */}
      {/* <View
        style={{ height: moderateScale(300), marginTop: moderateScale(-100) }}
      >
        <LottieView
          // ref={(animation) => {
          //   animateLotties = animation;
          // }}
          source={Lotties.noInternet}
          autoPlay={true}
          loop
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        />
      </View> */}

      <SText title={i18n.t("noInternet")} style={styles.text} />
    </View>
  );
};

export { NoInternet };

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // height: height / 1.35,
    flex: 1,
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: moderateScale(17),
    color: COLORS.blackLight,
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    marginTop: moderateScale(27),
    fontFamily: fonts.bold,
  },
  img: {
    width: "50%",
    height: width * 0.5,
    resizeMode: "contain",
  },
});
