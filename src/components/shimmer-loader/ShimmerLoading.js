import React from "react";
import { View } from "react-native";
import { ShimmerEffect } from "./ShimmerEffect";

export const ShimmerLoading = ({
    width,
    height,
    numberOfRows = 4,
    containerStyle,
    rowStyle,
}) => {
    let shimmerRows = [];

    const Rows = () => {
        for (let index = 0; index < numberOfRows; index++) {
            shimmerRows.push(
                <ShimmerEffect width={width} height={height} style={rowStyle} key={index} />
            );
        }
        return shimmerRows;
    };

    return (
        <View style={containerStyle}>
            <Rows />
        </View>
    );
};
