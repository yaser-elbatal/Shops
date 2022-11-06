import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { LangSwitchTab } from "@components";
import { Images, height } from "@common";

export const ShowLang = () => {


    return (
        <ImageBackground source={Images.LangBackground} style={styles.backgroundImg} resizeMode={'contain'}>
            <View style={{ flex: 0.85 }} />
            <LangSwitchTab />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImg: {
        height: height,
        backgroundColor: '#EDC5C4'

    },
});
