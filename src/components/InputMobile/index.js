import React from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    I18nManager,
} from "react-native";
import InputBasic from "./InputBasic";
import { BgView } from "../BgView";
import ViewLabel from "./ViewLabel";
import { COLORS, convertNumbersToEn, fonts, IS_IOS } from "../../common";
import { MIN_HEIGHT } from "../config";
import { BottomModalSwiping } from "../BottomModalSwiping";
import { SText } from "../SText";
import i18n from "@locale";
import * as Animatable from "react-native-animatable";
import { moderateScale, scale, verticalScale } from "../../common/Scalling";
import { PhoneSVG } from "@SVG";
// import { countryCodes } from "apis";

class InputMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSecure: props.secureTextEntry,
            isHeading: props.value || props.defaultValue,
            value: undefined,
            codeModal: false,
            codes: [
                {
                    key: "+966",
                    icon:
                        "https://cdn.britannica.com/79/5779-050-46C999AF/Flag-Saudi-Arabia.jpg",
                },
            ],
            selectedCode: props.phoneCode || "+966",
            mounted: false,
        };
        this.input = React.createRef();
    }

    // Fetch Request
    // async componentDidMount() {
    //   this.setState({ mounted: true });

    //   try {
    //     let res = await countryCodes();
    //     this.setState({ codes: res.data });
    //   } catch (error) {
    //     // console.log("error in InputMobile.js", error);
    //   }
    // }

    componentWillUnmount() {
        this.setState({
            mounted: false,
        });
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
                    this.props.onChangeText(convertNumbersToEn(value));
                }
            }
        );
    };
    handleBlur = (data) => {
        const { value } = this.state;
        this.setState({
            isHeading:
                value || (this.input.current && this.input.current._lastNativeText),
        });
        if (this.props.onBlur) {
            this.props.onBlur(data);
        }
    };

    selectCode = (code) => {
        this.setState({ selectedCode: code, codeModal: false });
        this.props?.onChangeKey && this.props?.onChangeKey(code);
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
            containerStyle,
            ...rest
        } = this.props;

        const { isHeading } = this.state;

        const AR_LAYOUT = I18nManager.isRTL;

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
                    onPress={() => this.setState({ codeModal: true })}
                    hitSlop={{ left: 20, top: 20, bottom: 20, right: 20 }}
                >
                    <Text style={styles.phoneCode(AR_LAYOUT)}>
                        {this.state.selectedCode}
                    </Text>
                </TouchableOpacity>
            );
        };

        return (
            <View style={containerStyle}>
                <ViewLabel
                    label={label}
                    labelStart={AR_LAYOUT ? moderateScale(30) : moderateScale(38)}
                    error={error}
                    isHeading={isHeading}
                >
                    <View
                        style={
                            this.props.disabled ? styles.viewInputDisabled : styles.viewInput
                        }
                    >
                        {!AR_LAYOUT ? renderCodeText() : renderMobileIcon()}
                        <InputBasic
                            {...rest}
                            inputRef={this.input}
                            testID="RN-text-input"
                            onBlur={this.handleBlur}
                            onFocus={this.handleFocus}
                            multiline={multiline}
                            // maxLength={9}
                            onChangeText={this.onChange}
                            style={[
                                styles.input,
                                !multiline && {
                                    height: MIN_HEIGHT,
                                },
                                style && style,
                            ]}
                            keyboardType={"numeric"}
                            editable={!this.props.disabled}
                        />
                        {AR_LAYOUT ? renderCodeText() : renderMobileIcon()}
                    </View>
                </ViewLabel>
                <BottomModalSwiping
                    header={i18n.t("phoneCode")}
                    visible={this.state.codeModal}
                    close={() => this.setState({ codeModal: false })}
                >
                    <View style={{ paddingHorizontal: moderateScale(20) }}>
                        <FlatList
                            data={this.state.codes}
                            // numColumns={2}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <Animatable.View
                                        animation={index % 2 ? "fadeInRight" : "fadeInLeft"}
                                        key={index}
                                        style={styles.list}
                                    >
                                        {this.state.codes[index].key == this.state.selectedCode && (
                                            <BgView style={styles.opacity} />
                                        )}
                                        <TouchableOpacity
                                            onPress={() => this.selectCode(item?.key)}
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
    }
}

const styles = StyleSheet.create({
    phoneCode: (AR_LAYOUT) => ({
        fontSize: moderateScale(14),
        color: COLORS.gray,
        marginEnd: AR_LAYOUT ? moderateScale(13) : 0,
        marginStart: AR_LAYOUT ? 0 : moderateScale(13),
        fontFamily: fonts.regular,
    }),
    input: {
        paddingHorizontal: moderateScale(15),
        fontSize: moderateScale(16),
        fontFamily: fonts.regular,
    },
    viewInput: {
        // flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    viewInputDisabled: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.lightgrey,
        borderRadius: moderateScale(18),
    },

    viewIcon: (AR_LAYOUT) => ({
        marginStart: AR_LAYOUT ? moderateScale(13) : 0,
        marginEnd: AR_LAYOUT ? 0 : moderateScale(13),
    }),
    icon: {
        // paddingVertical: moderateScale(13),
    },
    list: {
        paddingVertical: moderateScale(15),
        paddingHorizontal: moderateScale(28),
        // marginVertical: "4%",
        marginVertical: moderateScale(5),
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
});

export { InputMobile };
