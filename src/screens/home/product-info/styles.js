import { COLORS, fonts, moderateScale, scale, verticalScale, width } from "@common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    check: {
        width: width / 3 - scale(20),
        minWidth: moderateScale(25),
        minHeight: moderateScale(20),
        backgroundColor: COLORS.lightgrey,
        paddingHorizontal: scale(10),
        elevation: 3,
        flexDirection: 'row'

    },
    btnCheck: {
        color: COLORS.black,
        fontSize: moderateScale(12)
    },
    btnEdit: {
        color: COLORS.white,
        fontSize: moderateScale(12)
    },
    delete: {
        width: scale(70),
        minWidth: moderateScale(20),
        minHeight: moderateScale(10),
        backgroundColor: COLORS.error,
        paddingHorizontal: scale(10),
        elevation: 1,
        flexDirection: 'row'

    },
    title: {
        marginBottom: verticalScale(20),
        alignSelf: 'center',
        fontFamily: fonts.bold

    },
    content: {
        marginHorizontal: '2%'
    },
    productInfo: { fontFamily: fonts.bold, fontSize: moderateScale(18), textDecorationLine: 'underline', marginTop: verticalScale(20), marginBottom: verticalScale(5) },
    serviceRate: { fontFamily: fonts.bold, fontSize: moderateScale(18), textDecorationLine: 'underline', marginEnd: scale(10) }

});