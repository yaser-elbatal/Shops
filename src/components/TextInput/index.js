import React, { useMemo, useRef, useState } from 'react';
import {
  I18nManager,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { COLORS, fonts, moderateScale, scale, verticalScale } from '@common';
import { EyeCrossedSVG, EyeSVG, } from '@SVG';



export const InputText = ({

  labelTopValue = moderateScale(-32),
  borderColor = COLORS.greyLight,
  borderWidth = 1,
  paddingVertical = moderateScale(8),
  borderRadius = moderateScale(15),
  placeholder,
  value = '',
  onChangeText,
  StartIcon,
  secureTextEntry = false,
  EndIcon,

  ...textInputProps
}) => {

  const labelSharedValue = useSharedValue(0);


  const inputRef = useRef(null);
  const [isSecure, setIsSecure] = useState(secureTextEntry)

  const animatedLabelProps = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(
        interpolate(labelSharedValue.value, [0, 1], [16, 12])
      ),
      top: withTiming(
        interpolate(labelSharedValue.value, [0, 1], [0, labelTopValue])
      ),
    };
  });

  const styles = useMemo(
    () =>
      StyleSheet.create({
        textInput: {
          paddingVertical: paddingVertical,
          justifyContent: 'space-between',
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          borderColor: borderColor,
          marginHorizontal: '2%',
          marginTop: verticalScale(15),
          flexDirection: 'row',


        },
        textInputStyle: {
          fontSize: moderateScale(12),
          paddingBottom: Platform.OS === 'ios' ? moderateScale(8.3 / 2) : 0,
          paddingVertical: Platform.OS === 'ios' ? moderateScale(8.3 / 2) : moderateScale(12),
          width: '80%',
          textAlign: I18nManager.isRTL ? 'right' : 'left',
          fontFamily: fonts.regular,
          color: COLORS.grey

        },
        hitSlop: {
          right: scale(25),
          left: scale(25),
          top: scale(25),
          bottom: scale(25)
        },
        textInputLabelWrapper: {
          position: 'absolute',
          left: moderateScale(40),
          zIndex: 10,
          bottom: 0,
          top: 0,
          justifyContent: 'center',
        },
        startIcon: {
          marginStart: scale(10),
          alignSelf: 'center'
        }
      }),
    [borderColor, borderRadius, borderWidth, paddingVertical]
  );

  const labelHandler = () => {
    labelSharedValue.value = 1;
    inputRef?.current?.focus();
  };

  return (
    <View style={styles.textInput}>
      <View style={styles.startIcon}>
        {StartIcon}
      </View>

      <TextInput
        ref={inputRef}
        onFocus={() => (labelSharedValue.value = 1)}
        onBlur={() => {
          if (!value) labelSharedValue.value = 0;
        }}
        value={value}
        onChangeText={onChangeText}
        style={styles.textInputStyle}
        secureTextEntry={isSecure}
        {...textInputProps}
      />

      {secureTextEntry &&
        <TouchableOpacity
          style={{ alignSelf: 'center' }}
          onPress={() => setIsSecure(!isSecure)}
          hitSlop={styles.hitSlop}
        >
          {
            isSecure ?
              <EyeSVG />
              :
              <EyeCrossedSVG />
          }

        </TouchableOpacity>
      }
      <View style={{ alignSelf: 'center' }}>
        {EndIcon}
      </View>
      <Animated.View style={styles.textInputLabelWrapper}>
        <Pressable onPress={labelHandler}>
          <Animated.Text
            style={[
              animatedLabelProps,
              { backgroundColor: 'white', paddingHorizontal: scale(5), fontSize: moderateScale(10), fontFamily: fonts.regular, color: COLORS.grey },
            ]}
          >
            {placeholder}
          </Animated.Text>
        </Pressable>
      </Animated.View>

    </View>
  );
};

