import React, { useState } from "react";
import { StyleSheet, View, Modal, TouchableOpacity, Image } from "react-native";
import { COLORS, verticalScale, width } from "@common";
import Gallery from "react-native-image-gallery";
import {
  hitSlop,
  moderateScale,
} from "../../common";
import { CloseSvg, } from "@SVG";

export const ImagePreview = ({ image }) => {
  const [showImage, setShowImage] = useState(false);
  return (
    <View style={{ margin: moderateScale(10) }}>
      <TouchableOpacity
        style={{ borderRadius: moderateScale(10), overflow: "hidden" }}
        onPress={() => setShowImage(true)}
        activeOpacity={0.85}
      >
        <Image source={{ uri: image }} style={styles.img} />
        {/* <View style={styles.layer}>
          <EyeCrossedSVG fill={COLORS.danger} />

        </View> */}
      </TouchableOpacity>
      <Modal
        visible={showImage}
        animationType="fade"
        onRequestClose={() => setShowImage(false)}
        transparent={true}
        style={{ flex: 1 }}
      >
        <View style={styles.modalContainer}>


          <Gallery images={[{ source: { uri: image } }]}
          />
          <TouchableOpacity
            hitSlop={hitSlop(moderateScale(40))}
            onPress={() => setShowImage(false)}
            style={styles.iconContainer}
            activeOpacity={0.8}>
            <CloseSvg
              fill={COLORS.danger}
              width={moderateScale(40)}
              height={moderateScale(40)} />
          </TouchableOpacity>


          <View style={{ height: moderateScale(20) + 10 }} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    zIndex: 999,
  },
  iconContainer: {
    position: "absolute",
    zIndex: 9999,
    top: width * 0.01 + verticalScale(20),
    end: width * 0.04,
  },
  cancelBtnContainer: {
    backgroundColor: COLORS.mainLight,
    alignSelf: "center",
    margin: moderateScale(10),
    marginTop: 20 + moderateScale(10),
    borderRadius: moderateScale(25),
    overflow: "hidden",
  },
  cancelBtn: {
    color: COLORS.white,
    padding: moderateScale(10),
  },
  img: {
    width: "100%",
    height: moderateScale(250),
    resizeMode: "cover",
    borderRadius: moderateScale(10),
    overflow: "hidden",
  },
  layer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  zoomIn: {
    fontSize: moderateScale(35),
    color: COLORS.white,
  },
});
