import { I18nManager, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Fragment } from 'react'
import { COLORS, CommonStyle, fonts, moderateScale, scale, verticalScale, width } from '@common'
import { Line } from '../Line'
import { SText } from '../SText'

import i18n from "@locale";
import { LeftArrow, RightArrow } from '@SVG'

export const SettingCard = ({ data, EndIcon, StartIcon }) => {
    return (
        <View style={styles.card}>
            {
                data.map((item, index) => {
                    return (
                        <Fragment key={index.toString()}>
                            {
                                StartIcon && <TouchableOpacity
                                    style={styles.row}
                                    onPress={item.onPress}
                                    hitSlop={{ right: 30, left: 30, top: 30, bottom: 30 }}
                                >
                                    {/* <SText title={item.title} style={styles.title} /> */}
                                    <SText title={item.name} style={styles.title} />

                                </TouchableOpacity>
                            }

                            {
                                EndIcon &&

                                <TouchableOpacity
                                    style={styles.content(index, data)}
                                    onPress={item.onPress}
                                    activeOpacity={0.8}
                                    hitSlop={CommonStyle.hitSlop}
                                >
                                    <SText title={i18n.t(item.name)} style={styles.title} />
                                    {
                                        I18nManager.isRTL ?

                                            <LeftArrow />
                                            :
                                            <RightArrow />
                                    }
                                </TouchableOpacity>
                            }
                            {index == data.length - 1 ? null : <Line style={styles.line} />}

                        </Fragment>
                    )
                })}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        ...CommonStyle.shadow,
        marginHorizontal: '4%',
        padding: scale(15),
        backgroundColor: COLORS.white,
        marginTop: verticalScale(20),
        borderRadius: scale(12),
        marginBottom: scale(1),


    },
    content: (index, data) => ({
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: index == 0 ? verticalScale(15) : 0,
        marginBottom: index == data.length - 1 ? verticalScale(15) : 0,

    }),
    title: {
        color: COLORS.blackLight,
        fontSize: moderateScale(16),
        fontFamily: fonts.Medium,
        marginStart: scale(5)
    },
    line: {
        marginVertical: verticalScale(30),
        marginHorizontal: '10%',
        width: '80%',
        backgroundColor: COLORS.grey,
        height: moderateScale(1)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})