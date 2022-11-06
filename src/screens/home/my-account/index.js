import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Header, SettingCard, SText } from '@components'
import { fonts, SettingsData } from '@common'
import i18n from '@locale'

export const MyAccount = () => {
    return (
        <View style={styles.container}>
            <Header center={<SText title={i18n.t("SettingsPrivacy")} style={{ fontFamily: fonts.bold, }} />} />
            <Container header={true} scrollEnabled={true}>
                <SettingCard data={SettingsData} EndIcon />
            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
