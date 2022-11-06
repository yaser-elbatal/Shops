import React from 'react'
import { I18nManager, TouchableOpacity, } from 'react-native'

import { ArrowLeftSVG, ArrowRightSVG } from '@SVG';
import { styles } from "./styles";
import { toGoBack } from '@routes';
import { SText } from '../SText';
import { CommonStyle } from '@common';

export const BtnBack = ({ containerStyle, text, onPress }) => {


    const { isRTL, } = I18nManager

    return (
        <TouchableOpacity
            onPress={onPress ? onPress : () => toGoBack()}
            style={[text ? styles.btn : styles.btn2, containerStyle]}
            hitSlop={CommonStyle.hitSlop}
            activeOpacity={0.7}
        >
            {text ? (<SText title={text} style={styles.text} />) :
                isRTL ? (<ArrowRightSVG />) : (<ArrowLeftSVG />)}
        </TouchableOpacity>
    )
}


