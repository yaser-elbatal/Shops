import { Linking, StyleSheet, View } from 'react-native'
import React from 'react'
import { BtnBack, Container, Header, SettingCard, SText } from '@components'
import { toGoBack } from '@routes'
import { COLORS, scale, verticalScale } from '@common'
import i18n from "@locale";

export const ContactUs = () => {

    let Contacts = [
        { title: "phone:", name: '01029991120', onPress: () => Linking.openURL(`tel:${'01029991120'}`), icon: 'phone-message-outline' },
        { title: "email:", name: 'yaserelbatal7@gmail.com', onPress: () => Linking.openURL(`mailto:${'yaserelbatal7@gmail.com'}`), icon: 'email-open-outline' },
        { title: "what`s App:", name: '01029991120', onPress: () => Linking.openURL(`https://api.whatsapp.com/send?phone=${'01029991120'}`), icon: 'whatsapp' },
    ]

    let Social = [
        { name: 'www.facebook.com', onPress: () => Linking.openURL(`www.facebook.com`), icon: 'facebook' },
        { name: 'www.twitter.com', onPress: () => Linking.openURL(`www.twitter.com`), icon: 'instagram' },
        { name: 'www.instgram.com', onPress: () => Linking.openURL(`www.instgram.com`), icon: 'twitter' },

    ]



    return (
        <View style={{ flex: 1 }}>
            <Header
                center={<SText title={i18n.t("ContactUs")} />}
                start={<BtnBack onPress={() => toGoBack()} color={COLORS.black} />
                } />

            <Container
                header={true}
                scrollEnabled={true}
            >
                <SText
                    title={i18n.t('socialContact')}
                    style={styles.title}
                />
                <SettingCard data={Contacts} StartIcon />

                <SText
                    title={i18n.t('socialMedia')}
                    style={styles.title}

                />
                <SettingCard data={Social} StartIcon />
            </Container>
        </View>
    )
}


const styles = StyleSheet.create({

    title: {
        marginTop: verticalScale(20),
        marginStart: scale(5),
    }
})