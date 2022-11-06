import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, moderateScale, verticalScale } from '@common'

export const Line = ({ style }) => {
    return (
        <View style={[styles.line, style]} />
    )
}


const styles = StyleSheet.create({
    line: {
        width: '100%',
        height: moderateScale(2),
        backgroundColor: COLORS.black,
    }
})