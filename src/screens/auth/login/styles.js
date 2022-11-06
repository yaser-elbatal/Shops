import { moderateScale, verticalScale, width } from "@common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: verticalScale(350),
        resizeMode: 'contain'
    },
    btn: {
        marginTop: moderateScale(35),
        width: null,
        minWidth: width * 0.4,
    },
});