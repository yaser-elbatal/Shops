import { View, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Btn, BtnBack, Container, InputCode, SText } from '@components'
import { toGoBack } from '@routes'
import { COLORS, fonts, Images, moderateScale, scale, verticalScale } from '@common'
import i18n from "@locale";
import { useDispatch } from 'react-redux'
import { loginAction } from '@action'

export const CodeActivation = ({ route }) => {


    // let { phone, key } = route?.params;

    const [code, setCode] = useState("");
    const [loading, setloading] = useState(false);

    const dispatch = useDispatch();

    const confirmActivate = () => dispatch(loginAction({ phone: '123', password: '123' }))


    return (
        <View style={styles.container}>
            <Container header={true} scrollEnabled={true}>
                <BtnBack
                    onPress={() => toGoBack()}
                    color={COLORS.black}
                    containerStyle={styles.backBtn}
                />
                <Image source={Images.logo} style={styles.logo} />

                <View style={{ marginHorizontal: '2%', justifyContent: 'center', alignItems: "center" }}>
                    <SText
                        title={i18n.t("validateCodeSend")}
                        style={styles.text}
                    />
                    {/* <SText title={`${key}${phone}`} style={styles.phone} /> */}
                </View>

                <InputCode onFulfill={(e) => setCode(e)} />


                <Btn
                    text={i18n.t("confirm")}
                    btnStyle={styles.btn}
                    loading={loading}
                    onPress={confirmActivate}
                />

            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: verticalScale(200),
        alignSelf: "center",
        marginBottom: verticalScale(30),
        marginTop: verticalScale(20),
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        // backgroundColor: COLORS.white
    },
    backBtn: {
        alignSelf: "flex-start"
    },
    checkContainer: {
        alignItems: "center",
    },
    checkDoneText: {
        fontSize: moderateScale(18),
        textAlign: "center",
        marginTop: moderateScale(15),
        marginBottom: moderateScale(20),
        fontFamily: fonts.bold,
    },
    text: {
        fontSize: moderateScale(16),
        fontFamily: fonts.regular,
        marginTop: moderateScale(15)
    },
    btn: {
        marginTop: verticalScale(25),
        backgroundColor: COLORS.main,
        width: scale(140)
    },
    phone: {
        color: COLORS.main
    },
    wrapBtn: {
        flexDirection: 'row',
        marginTop: verticalScale(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnResend: {
        backgroundColor: COLORS.main,
        width: scale(160),
        marginTop: verticalScale(25),

    },
    btnEdit: {
        backgroundColor: COLORS.black,
        width: scale(160),
        marginTop: verticalScale(25),
    },
    content: {
        marginHorizontal: '2%',
        justifyContent: 'center',
        alignItems: "center"
    }
});