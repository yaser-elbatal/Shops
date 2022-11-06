import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Animated, Easing } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const SCREEN_WIDTH = Dimensions.get("screen").width;
const START = -1;
const END = 1;
const DURATION = 1200;
const SHIMMERCOLORS = [`rgba(0, 0, 0, .3)`, "#CBCBCB", "#eee"];
const LOCATIONS = [0.3, 0.5, 0.7];
const ANIMATION = new Animated.Value(START);

const runAnimation = () => {
    ANIMATION.setValue(START);
    Animated.timing(ANIMATION, {
        toValue: END,
        duration: DURATION,
        easing: Easing.linear(),
        useNativeDriver: true,
    }).start(runAnimation);
};

const linear = ANIMATION.interpolate({
    inputRange: [START, END],
    outputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
});

runAnimation();

export const ShimmerEffect = ({ width = "95%", height = 130, style }) => {
    const [positionX, setPositionX] = useState(null);
    let viewRef = null;

    return (
        <View>
            <View
                style={[styles.shimmer, { width, height }, style]}
                ref={(ref) => (viewRef = ref)}
                onLayout={() => {
                    if (viewRef) {
                        viewRef.measure((_x, _y, _width, _height, pageX, _pageY) => {
                            setPositionX(pageX);
                        });
                    }
                }}
            >
                {positionX !== null && (
                    <Animated.View
                        style={{
                            flex: 1,
                            left: -positionX || -1,
                            transform: [{ translateX: linear }],
                        }}
                    >
                        <LinearGradient
                            style={{ flex: 1, width: SCREEN_WIDTH }}
                            start={{ x: 0, y: -0.5 }}
                            end={{ x: 1, y: 0 }}
                            locations={LOCATIONS}
                            colors={SHIMMERCOLORS}

                        />
                    </Animated.View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    shimmer: {
        overflow: "hidden",
        // backgroundColor: "#eee",
        backgroundColor: "#eee",
        alignSelf: "center",
        marginHorizontal: 5,
        borderRadius: 15,
        // marginTop: 2,
        marginBottom: 8,
    },
});
