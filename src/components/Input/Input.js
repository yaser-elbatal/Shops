import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import InputBasic from "./InputBasic";
import ViewLabel from "./ViewLabel";
import { MIN_HEIGHT } from "../config";
import { moderateScale, COLORS, scale } from "../../common";
import { EyeCrossedSVG, EyeSVG } from "@SVG";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSecure: props.secureTextEntry,
      isHeading: props.value || props.defaultValue,
      value: props.value,
    };
    this.input = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        isHeading: this.props.value,
      });
    }
  }

  handleFocus = (data) => {
    this.setState({ isHeading: true });
    if (this.props.onFocus) {
      this.props.onFocus(data);
    }
  };
  onChange = (value) => {
    this.setState(
      {
        value,
      },
      () => {
        if (this.props.onChangeText) {
          this.props.onChangeText(value);
        }
      }
    );
  };
  handleBlur = (data) => {
    const { value } = this.state;
    console.log("value", value);
    this.setState({
      isHeading:
        value || (this.input.current && this.input.current._lastNativeText),
    });
    if (this.props.onBlur) {
      this.props.onBlur(data);
    }
  };

  render() {
    const {
      label,
      error,
      secureTextEntry,
      style,
      multiline = false,
      icon,
      iconType,
      image,
      containerStyle,
      StartIcon,
      startIconType,
      contentContainerStyle,
      defaultValue,
      placeholder,
      EndIcon,
      ...rest
    } = this.props;
    const { isSecure, isHeading } = this.state;
    return (
      <ViewLabel
        label={isHeading ? label : placeholder}
        error={error}
        isHeading={isHeading}
        containerStyle={[containerStyle]}
        labelStart={StartIcon ? moderateScale(23) : 0}
        contentContainerStyle={[
          {
            marginTop: moderateScale(5),
          },
          contentContainerStyle,
        ]}
        defaultValue={defaultValue}
      >
        <View style={styles.viewInput}>
          {StartIcon && StartIcon}
          <InputBasic
            {...rest}
            inputRef={this.input}
            testID="RN-text-input"
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            secureTextEntry={isSecure}
            multiline={multiline}
            onChangeText={this.onChange}
            style={[
              styles.input,
              !multiline && {
                height: MIN_HEIGHT,
              },
              style && style,
            ]}
          // placeholder={isHeading ? null : placeholder}

          />
          {secureTextEntry &&
            (
              <TouchableOpacity
                style={{ alignSelf: 'center' }}
                onPress={() => this.setState({
                  isSecure: !isSecure,
                })}
                hitSlop={styles.hitSlop}
              >
                {isSecure ?
                  <EyeSVG />
                  :
                  <EyeCrossedSVG />
                }
              </TouchableOpacity>
            )
          }

          <View style={{ alignSelf: 'center' }}>
            {EndIcon && EndIcon}
          </View>

          {image && <Image source={image} style={styles.image} />}
        </View>
      </ViewLabel>
    );
  }
}

const styles = StyleSheet.create({
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: scale(5),

  },
  input: {
    paddingHorizontal: moderateScale(10),
    fontSize: moderateScale(14),
    marginTop: 0


  },
  viewIcon: {
    marginEnd: moderateScale(10),
    width: moderateScale(28),
    fontSize: moderateScale(23),
    color: COLORS.gray,
  },
  icon: {
    paddingVertical: moderateScale(10),
    fontSize: moderateScale(20),
  },
  image: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: "contain",
    marginHorizontal: moderateScale(10),
  },
  viewStartIcon: {
    marginStart: moderateScale(13),
    marginTop: 0
  },
});

export { Input };
