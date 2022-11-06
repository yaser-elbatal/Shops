import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { COLORS, CommonStyle, fonts, moderateScale, scale, verticalScale } from '@common'
import { SText } from '../SText'
import { useMemo, } from 'react'
import { Ratings } from '../Rating'

export const OrdersCard = ({ item, }) => {



    return useMemo(() => {
        return (
            <View style={styles.card}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />
                <View style={styles.conetent}>
                    <SText title={item.title} style={styles.name} />
                    <SText title={item?.price} style={styles.name} numberOfLines={2} />
                    <Ratings
                        starSize={moderateScale(15)}
                        disabled={true}
                        rating={item?.rate}
                        containerStyle={{ justifyContent: 'flex-start' }}
                    />
                </View>
            </View>
        )
    }, [item,])
}


const styles = StyleSheet.create({

    card: {
        ...CommonStyle.shadow,
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        marginHorizontal: scale(10),
        borderRadius: scale(12),
        marginTop: verticalScale(10),
        marginBottom: scale(1),
        overflow: "hidden",

    },
    image: {
        width: scale(140),
        height: scale(120),
        resizeMode: 'cover',
    },
    conetent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: scale(5),
        marginStart: scale(5)
    },
    name: {
        fontFamily: fonts.Medium,
        fontSize: moderateScale(14),
    },
    location: {
        fontSize: moderateScale(14),

    },
    wrap: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    icon: {
        color: COLORS.black,
        fontSize: moderateScale(30),
    },

    positionEnd: {
        alignSelf: 'flex-end',
        fontFamily: fonts.regular,
        fontSize: moderateScale(14),
        marginEnd: scale(10)
    },
    space: {
        ...CommonStyle.rowSpace,
        margin: scale(5)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    btnConfirm: {
        backgroundColor: COLORS.main,
        width: scale(140),
        marginTop: verticalScale(25),

    },
    btnCancel: {
        backgroundColor: COLORS.black,
        width: scale(140),
        marginTop: verticalScale(25),
    },
    wrapBtn: {
        flexDirection: 'row',
        marginTop: verticalScale(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        alignSelf: 'flex-end',
    },
    rowSpace: {
        ...CommonStyle.rowSpace,
        width: '100%',
    }
})



