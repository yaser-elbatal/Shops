import React from "react";
import { ActivityIndicator, View, StyleSheet, Image } from "react-native";
import { scale, COLORS, width, height } from "../../common";

const SIZES = { SMALL: "small", LARGE: "large" };

export const Mode = { normal: "normal", full: "full", overlay: "overlay" };

export const Spinner = ({ size, color, mode, type }) => {
    let containerStyle = styles.container;
    switch (mode) {
        case Mode.full:
            containerStyle = styles.container_full_stretch;
            break;
        case Mode.overlay:
            containerStyle = styles.container_overlay;
            break;
    }
    return (
        <View style={containerStyle}>
            {type == "image" ? (
                <Image
                    source={{
                        uri:
                            "https://i.pinimg.com/originals/18/42/81/184281f0fe87517a950beb8112c308dd.gif",
                    }}
                    style={styles.logo}
                    resizeMode="contain"
                />
            ) : (
                <ActivityIndicator
                    size={size}
                    color={color}
                    style={[
                        styles.wrapper,
                        { borderRadius: size == SIZES.SMALL ? scale(10) : scale(20) },
                    ]}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        height: null,
        width: null,
    },
    container_full_stretch: {
        flexGrow: 1,
        height: null,
        width: null,
        // backgroundColor: 'transparent',
        backgroundColor: COLORS.bgLight,
        alignItems: "center",
        justifyContent: "center",
    },
    container_overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width,
        height,
        backgroundColor: "rgba(0,0,0,0.2)",
        alignItems: "center",
        justifyContent: "center",
    },
    wrapper: {
        backgroundColor: "transparent",
        zIndex: 100,
    },
    logo: {
        width: scale(102),
        height: scale(102),
        resizeMode: "contain",
    },
});

Spinner.defaultProps = {
    color: COLORS.main,
    size: "large",
    mode: Mode.normal,
};
