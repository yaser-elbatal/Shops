import React, { useMemo, useRef, useState } from 'react';
import {
    FlatList,
    I18nManager,
    Image,
    Platform,
    Pressable,
    StyleSheet,
    Text,
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
import { PhoneSVG } from '@SVG';
import { BottomModalSwiping } from '../BottomModalSwiping';
import i18n from '@locale';
import * as Animatable from "react-native-animatable";
import { BgView } from '../BgView';
import { SText } from '../SText';



export const InputMobileAnimated = ({

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
    phoneCode,
    onChangeKey,
    ...textInputProps
}) => {

    const [inputs, setInputs] = useState({
        codes: [
            {
                key: "+966",
                icon:
                    "https://cdn.britannica.com/79/5779-050-46C999AF/Flag-Saudi-Arabia.jpg",
            },
        ],
        value: undefined,
        codeModal: false,
        selectedCode: phoneCode || "+966",
    })

    const labelSharedValue = useSharedValue(0);
    const AR_LAYOUT = I18nManager.isRTL;
    const inputRef = useRef(null);

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


    const renderMobileIcon = () => {
        return (
            <View style={{ marginHorizontal: scale(10) }}>
                <PhoneSVG />
            </View>
        );
    };

    const renderCodeText = () => {
        return (
            <TouchableOpacity
                onPress={() => setInputs({ ...inputs, codeModal: true })}
                hitSlop={{ left: 20, top: 20, bottom: 20, right: 20 }}
                style={{ alignSelf: 'center' }}
            >
                <Text style={styles.phoneCode(AR_LAYOUT)}>
                    {inputs.selectedCode}
                </Text>
            </TouchableOpacity>
        );
    };


    const selectCode = (code) => {
        setInputs({ ...inputs, codeModal: false, selectedCode: code, })
        onChangeKey && onChangeKey(code);
    };


    const labelHandler = () => {
        labelSharedValue.value = 1;
        inputRef?.current?.focus();
    };


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
                },
                phoneCode: (AR_LAYOUT) => ({
                    fontSize: moderateScale(14),
                    color: COLORS.grey,
                    marginEnd: AR_LAYOUT ? moderateScale(13) : 0,
                    marginStart: AR_LAYOUT ? 0 : moderateScale(13),
                    fontFamily: fonts.regular,
                }),
                list: {
                    paddingVertical: moderateScale(18),
                    paddingHorizontal: moderateScale(28),
                    // marginVertical: "4%",
                    marginVertical: moderateScale(10),
                    backgroundColor: COLORS.gray,
                    alignSelf: "center",
                    borderRadius: moderateScale(10),
                    // overflow: "hidden",
                    width: "40%",
                    marginHorizontal: "4%",
                    minHeight: verticalScale(40),
                    justifyContent: "center",
                    alignItems: "center",
                },
                opacity: {
                    borderRadius: moderateScale(10),
                    backgroundColor: "rgba(0,0,0,0.2)",
                },
                keyContainer: {
                    flexDirection: "row",
                    alignItems: "center",
                },
                codeText: {
                    fontSize: moderateScale(17),
                    textAlign: "center",
                    color: COLORS.main,
                },
                img: {
                    width: scale(43),
                    height: scale(33),
                    resizeMode: "contain",
                    marginEnd: moderateScale(18),
                },
            }),
        [borderColor, borderRadius, borderWidth, paddingVertical]
    );


    return (
        <View style={styles.textInput}>
            <View style={styles.startIcon}>
                {!AR_LAYOUT ? renderCodeText() : renderMobileIcon()}
            </View>

            <TextInput
                ref={inputRef}
                onFocus={() => (labelSharedValue.value = 1)}
                onBlur={() => {
                    if (!value) labelSharedValue.value = 0;
                }}
                value={value}
                onChangeText={onChangeText}
                style={[styles.textInputStyle]}
                {...textInputProps}
            />


            {AR_LAYOUT ? renderCodeText() : renderMobileIcon()}



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



            <BottomModalSwiping
                header={i18n.t("phoneCode")}
                visible={inputs.codeModal}
                close={() => setInputs({ ...inputs, codeModal: false })}
            >
                <View style={{ paddingHorizontal: moderateScale(20) }}>
                    <FlatList
                        data={inputs.codes}
                        // numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <Animatable.View
                                    animation={index % 2 ? "fadeInRight" : "fadeInLeft"}
                                    key={index}
                                    style={styles.list}
                                >
                                    {inputs.codes[index].key == inputs.selectedCode && (
                                        <BgView style={styles.opacity} />
                                    )}
                                    <TouchableOpacity
                                        onPress={() => selectCode(item?.key)}
                                    >
                                        <View style={styles.keyContainer}>
                                            {item?.icon && (
                                                <Image
                                                    source={{ uri: item?.icon }}
                                                    style={styles.img}
                                                />
                                            )}
                                            <SText title={item?.key} style={styles.codeText} />
                                        </View>
                                    </TouchableOpacity>
                                </Animatable.View>
                            );
                        }}
                    />
                </View>
            </BottomModalSwiping>
        </View>
    );
};

