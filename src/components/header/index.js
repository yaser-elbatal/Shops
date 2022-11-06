import React from "react";
import PropTypes from "prop-types";
import {
    Platform,
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Text,
} from "react-native";
import { renderNode, nodeType, ViewPropTypes } from "../helpers";
import { padding } from "../config";
import { COLORS, moderateScale } from "@common";
import { Svg } from "react-native-svg";

const ALIGN_STYLE = {
    left: "flex-start",
    right: "flex-end",
    center: "center",
};

// const THEME = {
//   bgColor: COLORS.mainLight
// }

const Children = ({ style, placement, children }) => (
    <View
        style={StyleSheet.flatten([{ alignItems: ALIGN_STYLE[placement] }, style])}
    >
        {children == null || children === false
            ? null
            : children.text
                ? renderNode(Text, children.text, { numberOfLines: 1, ...children })
                : children.icon
                    ? renderNode(Svg, {
                        ...children,
                        name: children.icon,
                        containerStyle: StyleSheet.flatten([
                            { alignItems: ALIGN_STYLE[placement] },
                            children.containerStyle,
                        ]),
                    })
                    : renderNode(Text, children)}
    </View>
);

Children.propTypes = {
    placement: PropTypes.oneOf(["left", "center", "right"]),
    style: ViewPropTypes.style,
    children: PropTypes.oneOfType([nodeType, PropTypes.node]),
};

export const Header = ({
    // statusBarProps,
    start,
    center,
    end,
    leftContainerStyle,
    centerContainerStyle,
    rightContainerStyle,
    backgroundColor,
    backgroundImage,
    containerStyle,
    placement,
    // barStyle,
    children,
    theme = { bgColor: COLORS.white },
    ...attributes
}) => (
    <ImageBackground
        testID="headerContainer"
        {...attributes}
        style={StyleSheet.flatten([
            styles.container(theme),
            backgroundColor && { backgroundColor },
            containerStyle,
        ])}
        source={backgroundImage}
    // imageStyle={backgroundImageStyle}
    >
        {/*<StatusBar barStyle={barStyle} {...statusBarProps} />*/}
        <Children
            style={StyleSheet.flatten([
                placement === "center" && styles.rightLeftContainer,
                leftContainerStyle,
            ])}
            placement="left"
        >
            {(React.isValidElement(children) && children) || children[0] || start}
        </Children>

        <Children
            style={StyleSheet.flatten([
                styles.centerContainer,
                placement !== "center" && {
                    paddingHorizontal: Platform.select({
                        android: 16,
                        default: 15,
                    }),
                },
                centerContainerStyle,
            ])}
            placement={placement}
        >
            {children[1] || center}
        </Children>

        <Children
            style={StyleSheet.flatten([
                placement === "center" && styles.rightLeftContainer,
                rightContainerStyle,
            ])}
            placement="right"
        >
            {children[2] || end}
        </Children>
    </ImageBackground>
);

Header.propTypes = {
    placement: PropTypes.oneOf(["left", "center", "right"]),
    start: nodeType,
    center: nodeType,
    end: nodeType,
    leftContainerStyle: ViewPropTypes.style,
    centerContainerStyle: ViewPropTypes.style,
    rightContainerStyle: ViewPropTypes.style,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.object,
    // backgroundImageStyle: Image.propTypes.string,
    containerStyle: ViewPropTypes.style,
    // statusBarProps: PropTypes.object,
    // barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    theme: PropTypes.object,
};

Header.defaultProps = {
    placement: "center",
    children: [],
};

const styles = {
    container: (theme) => ({
        // borderBottomColor: '#f2f2f2',
        zIndex: 9,
        borderBottomWidth: 0,
        paddingHorizontal: padding.small + 1,
        backgroundColor: COLORS.greyLight,
        // paddingTop: barHeight,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height:
            Platform.select({
                android: moderateScale(56),
                default: moderateScale(56),
            }),
    }),
    centerContainer: {
        flex: 3,
    },
    rightLeftContainer: {
        flex: 1,
    },
};
