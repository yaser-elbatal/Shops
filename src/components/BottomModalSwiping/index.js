import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, StyleProp, ViewStyle, Pressable } from "react-native";

import { SText } from "../SText";
// import KeyboardSpacer from "react-native-keyboard-spacer";
import Modal from "react-native-modal";
import { CloseSvg } from "@SVG";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "../Toaster";
import { modalToasterAction } from "@action";
import { COLORS, height, IS_IOS, moderateScale, verticalScale, width } from "@common";




export const BottomModalSwiping = ({
  visible,
  close,
  header,
  children,
  style,
  scroll,
  description,
  btnHeader,
  btnHeaderPress,
  ...props
}) => {

  const { modalToaster } = useSelector((state) => state.general);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(modalToasterAction(false));
    close && close();
  };


  useEffect(() => {
    modalToaster != visible && dispatch(modalToasterAction(visible));
  }, [visible]);


  return (
    <Modal
      testID={"modal"}
      backdropColor={"black"}
      isVisible={visible}
      onBackButtonPress={handleClose}
      onBackdropPress={handleClose}
      onSwipeComplete={handleClose}

      swipeDirection={["down"]}
      // useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      style={{ margin: 0, flexGrow: 1, justifyContent: "flex-end" }}
      {...props}
    >
      <View style={styles().lineSwipe} />
      <View style={[styles().content, style]}>
        <View style={styles().rowSpace}>
          <SText title={header} />
          <TouchableOpacity style={styles().closeIcon} onPress={handleClose}>
            <CloseSvg />
          </TouchableOpacity>
        </View>
        <View style={styles().modelC}>
          {children}
        </View>

      </View>
      {/* {IS_IOS && <KeyboardSpacer />} */}
      {modalToaster && <Toaster statusBarHeight={false} />}

    </Modal>
  );
};



const styles = () => StyleSheet.create({
  lineSwipe: {
    width: width * 0.18,
    height: verticalScale(5),
    borderRadius: moderateScale(4),
    backgroundColor: COLORS.white,
    alignSelf: "center",
    marginBottom: verticalScale(7),
    marginTop: verticalScale(10),
  },
  content: {

    backgroundColor: COLORS.white,
    paddingVertical: moderateScale(12),
    borderTopRightRadius: moderateScale(32),
    borderTopLeftRadius: moderateScale(32),
    paddingBottom: IS_IOS ? moderateScale(37) : moderateScale(12),
    paddingHorizontal: moderateScale(17),
  },
  header: {
    paddingVertical: moderateScale(12),
    marginBottom: moderateScale(7),
    fontSize: moderateScale(18),
    color: COLORS.black,
  },
  description: {
    marginTop: 0,
    marginBottom: moderateScale(17),
    fontSize: moderateScale(16),
    color: COLORS.greyLight,
  },
  modelC: {
    width: "100%",
    flexGrow: 1,
    maxHeight: height * 0.84,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnStyle: {
    backgroundColor: "#FDF5DC",
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(21),
    borderRadius: moderateScale(42),
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  btnHeaderText: {
    fontSize: moderateScale(14),
    color: COLORS.black,
  },
  iconStyle: {
    color: COLORS.black,
    fontSize: moderateScale(20),
    marginEnd: moderateScale(7),
  },
  rowSpace: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: verticalScale(10),
  },
  closeIcon: {
    height: moderateScale(25),
    width: moderateScale(50)
  },
});
