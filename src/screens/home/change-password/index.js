import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Btn, BtnBack, Container, Header, Input, SText } from '@components'
import { toGoBack } from '@routes'
import { COLORS, fonts, scale, verticalScale } from '@common'
import i18n from "@locale";
import { PasswordSVG } from '@SVG'

export const ChangePassword = () => {


    const [inputs, setInputs] = useState({
        cerrentPassword: "",
        newPassword: "",
        confirmNewPass: ''
    });

    const handleInputs = (key, value) => {
        setInputs({ ...inputs, [key]: value });
        // Validate

    };

    return (
        <View style={{ flex: 1 }}>
            <Header
                center={<SText title={i18n.t("changePassword")} style={{ fontFamily: fonts.bold, }} />}
                start={<BtnBack onPress={() => toGoBack()} color={COLORS.black} />
                } />

            <Container
                header={true}
                style={styles.container}
                scrollEnabled={true}
            >

                <Input
                    StartIcon={<PasswordSVG />}
                    label={i18n.t("cerrentPassword")}
                    onChangeText={(value) => handleInputs("cerrentPassword", value)}
                    secureTextEntry={true}
                    placeholder={i18n.t("password")}
                    value={inputs.cerrentPassword}
                    contentContainerStyle={{ marginTop: verticalScale(30) }}

                />

                <Input
                    StartIcon={<PasswordSVG />}
                    label={i18n.t("newPassword")}
                    placeholder={i18n.t("newPassword")}
                    onChangeText={(value) => handleInputs("newPassword", value)}
                    secureTextEntry
                    value={inputs.newPassword}

                />

                <Input
                    StartIcon={<PasswordSVG />}
                    label={i18n.t("confirmNewPassword")}
                    placeholder={i18n.t("confirmNewPassword")}
                    onChangeText={(value) => handleInputs("confirmNewPass", value)}
                    secureTextEntry
                    value={inputs.confirmNewPass}

                />
                <Btn
                    // loading={loading}
                    onPress={() => toGoBack()}
                    text={i18n.t("Save")}
                    btnStyle={styles.btn}
                />

            </Container>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: scale(10),
        backgroundColor: COLORS.white
    },
    btn: {
        marginTop: verticalScale(30),
        backgroundColor: COLORS.main,
        width: scale(140)
    },
})