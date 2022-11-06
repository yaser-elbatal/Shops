import { COLORS, moderateScale } from "@common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    btn: {
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(10),
    },
    btn2: {
        paddingVertical: moderateScale(10),
    },
    // icon: { marginStart: 5 },
    text: {
        color: COLORS.main,
        fontSize: moderateScale(16),
    },
});