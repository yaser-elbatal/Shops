import React from "react";
import { StyleSheet, View, Animated } from "react-native";
import {
  margin,
  padding,
  borderRadius,
  sizes,
  lineHeights,
  MIN_HEIGHT,
} from "../config";
import { COLORS, fonts, IS_IOS, moderateScale, scale } from "../../common";

const TOP = moderateScale(9);
const BOTTOM = moderateScale(margin.base - 8);

class ViewLabel extends React.Component {
  UNSAFE_componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.isHeading ? 1 : 0);
  }
  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.props.defaultValue ? 1 : this.props.isHeading ? 1 : 0,
      duration: 130,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const {
      label,
      error,
      children,
      labelStart,
      containerStyle,
      contentContainerStyle,
    } = this.props;
    const paddingHorizontal = moderateScale(padding.large - margin.small);
    const topCenter =
      (moderateScale(MIN_HEIGHT) -
        moderateScale(IS_IOS ? lineHeights?.base : sizes.base)) /
      2;
    const container = {
      borderColor: this.props.isHeading ? COLORS.greyLight : COLORS.graytextC,
    };
    const labelStyle = {
      position: "absolute",
      left: labelStart || 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [topCenter, -TOP],
      }),

      fontFamily: fonts.Medium,
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [moderateScale(sizes.base), moderateScale(16)],
      }),
      lineHeight: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [moderateScale(lineHeights.base), moderateScale(21)],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [COLORS.grey, COLORS.black],
      }),
      zIndex: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 9999],
      }),
      backgroundColor: COLORS.white,
      paddingHorizontal: paddingHorizontal,
      marginHorizontal: moderateScale(margin.small),
    };
    return (
      <View style={[styles.content, containerStyle]}>
        <View style={[styles.container, container, contentContainerStyle]}>
          {typeof label === "string" ? (
            <Animated.Text
              style={[{ borderRadius: moderateScale(3) }, labelStyle]}
              numberOfLines={1}
            >
              {label}
            </Animated.Text>
          ) : null}
          {children}
        </View>
        {typeof error === "string" ? (
          <Animated.Text style={[styles.textError]} numberOfLines={1}>
            {error}
          </Animated.Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: moderateScale(10),
    marginHorizontal: '2%',
  },
  container: {
    minHeight: moderateScale(MIN_HEIGHT),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(borderRadius.base),
    marginTop: TOP,
    marginBottom: BOTTOM,
    borderColor: COLORS.grayLight,
    backgroundColor: COLORS.white,
  },
  textError: {
    fontSize: moderateScale(12),
    marginBottom: BOTTOM,
    color: COLORS.error,
    fontFamily: fonts.Medium,
  },
});

ViewLabel.defaultProps = {
  isHeading: false,
};

export default ViewLabel;
