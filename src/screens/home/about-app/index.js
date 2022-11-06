import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { BtnBack, Container, Header, SText } from '@components'
import { COLORS, fonts, Images, moderateScale, scale, verticalScale } from '@common'
import i18n from "@locale";

export const AboutApp = () => {


    return (
        <View style={{ flex: 1 }}>
            <Header
                center={<SText title={i18n.t("aboutApp")} style={{ fontFamily: fonts.bold, }} />}
                start={<BtnBack color={COLORS.black} />
                } />

            <Container
                header={true}
                scrollEnabled={true}
            >

                <Image
                    source={Images.logo}
                    style={styles.logo}
                />
                <SText
                    style={styles.label}
                    title={'تطبيق محلات خاص باصحاب المتاجر والخدمات لكي تتمكن من اضافه خدماتك ومنتجاتك بسهوله لعرضها للمستخدم'} />
            </Container>
        </View>
    )
}



const styles = StyleSheet.create({

    logo: {
        width: '100%',
        height: verticalScale(180),
        alignSelf: "center",
        marginBottom: verticalScale(30),
        resizeMode: 'contain',
        marginTop: verticalScale(10),

    },
    label: {
        fontFamily: fonts.regular,
        fontSize: moderateScale(14),
        marginHorizontal: scale(5)
    }
});