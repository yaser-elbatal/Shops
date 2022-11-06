import React, { useMemo, useState } from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";
import { COLORS, CommonStyle, fonts, Images, moderateScale, scale, verticalScale, width } from "../../common";
import { SText } from "../SText";
import { Ratings } from "../Rating";
import * as Animatable from "react-native-animatable";
import { toProductDetails } from "@routes";

export const ProductCard = ({ item, index, handleClick }) => {
  const [imgLoaded, setImgLoaded] = useState(false);


  const onLoadImg = (dataUri) => {
    if (dataUri !== undefined) {
      setImgLoaded(true);
    }
  };

  return useMemo(() => {
    return (
      <Animatable.View
        animation={"fadeIn"}
        delay={index < 10 ? index * 100 : null}
        style={styles.container}
      >
        <TouchableOpacity
          style={{ justifyContent: "space-between" }}
          onPress={() => toProductDetails(item)}
          activeOpacity={0.85}
        >
          <View>
            <Image
              source={
                imgLoaded
                  ? {
                    uri: item?.img || item?.image,
                  }
                  : Images.default
              }
              style={styles.img}
              onLoadEnd={onLoadImg}
            />
            <View
              style={{
                paddingHorizontal: 5,
              }}
            >

              <View style={styles.rateContainer}>
                <SText
                  title={item.title}
                  style={styles.text}
                  numberOfLines={1}
                />


              </View>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <SText title={`${item.price}`} style={styles.price} />
            <Ratings
              starSize={moderateScale(15)}
              disabled={true}
              rating={item?.rate}
            />
          </View>
        </TouchableOpacity>
      </Animatable.View>
    );
  }, [item, index, imgLoaded]);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: scale(10),
    ...CommonStyle.shadow,
    marginStart: scale(7),
    width: width / 3 - scale(10),
    marginTop: verticalScale(5),
  },
  img: {
    flex: 1,
    height: moderateScale(140),
    width: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    overflow: "hidden",
    marginBottom: scale(8),
  },
  text: {
    fontSize: moderateScale(14),
    color: COLORS.black,
    marginBottom: moderateScale(5),
  },
  rateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 11,
    color: COLORS.main,
    flex: 1,
    flexGrow: 1,
  },
  price: {
    fontSize: moderateScale(13),
    fontFamily: fonts.bold
  },
  priceContainer: {
    flexDirection: "row",
    marginTop: scale(5),
    marginBottom: moderateScale(3),
    justifyContent: 'space-between',
    paddingHorizontal: scale(4),
    flexWrap: 'wrap'
  },
});
