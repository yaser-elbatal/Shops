import React, { useEffect, useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import i18n from "@locale";
import { Platform } from "react-native";
import { showToaster } from '../Toaster';
import { moderateScale } from '@common';




export const PickImage = async (type) => {

    const options = {
        width: moderateScale(200),
        height: moderateScale(200),
        compressImageMaxWidth: moderateScale(200),
        compressImageMaxHeight: moderateScale(200),
        cropping: false,
        multiple: false,
        mediaType: 'photo',
    };


    if (type == "camera") {
        let result = await ImagePicker.openCamera(options).then((image) => {
            return image
        }).catch(e => {
            console.log('image picker camera error', e);
        });
        return result
    } else {
        let result = await ImagePicker.openPicker(options).then((image) => {
            return image
        }).catch(e => {
            console.log('image picker error', e);
        });
        return result

    }
}




