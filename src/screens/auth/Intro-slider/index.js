import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Swiper from "react-native-swiper";
import { COLORS, fonts, height, intros, moderateScale } from '@common';
import { BgView, SkipBtn, SText } from '@components';
import i18n from '@locale';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLang } from '../lang';
import { setIntroSeenAction } from '@action';

export const IntroSlider = () => {


    const swiper = useRef(null);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const { lang } = useSelector((state) => state.general);
    const dispatch = useDispatch()

    const skipTutorial = () => {
        swiper?.current?.scrollBy(1);
        setIndex(index + 1);
    };




    let lastSlide = index < intros?.length - 1;
    const RenderBtns = () => {
        return lastSlide && <SkipBtn onPress={skipTutorial} />;
    };

    const StartBtn = () => {
        return (
            <SkipBtn text={i18n.t('start')}
                containerStyle={styles.startBtnContainer}
                onPress={() => dispatch(setIntroSeenAction(true))}
            />
        );
    };

    return !lang ? (
        <View>
            <ShowLang />
        </View>)
        :
        (<View style={{ flex: 1 }}>
            <RenderBtns

            />
            <Swiper
                index={index}
                showsPagination={lastSlide ? true : false}
                paginationStyle={styles.pagination}
                dot={<View style={styles.dotCircle} />}
                activeDot={<View style={[styles.dotCircle, styles.active]} />}
                loop={true}
                ref={swiper}
                autoplay={true}
            >
                {intros?.map((slider, index) => {
                    return (
                        <ImageBackground
                            key={index}
                            source={{
                                uri: slider?.image,
                            }}
                            style={styles.img}
                            resizeMode="stretch"
                        >
                            <BgView />
                            <View style={{ flex: 0.8 }} />
                            <View style={{ flex: 0.35 }}>
                                <SText
                                    title={slider?.title}
                                    style={styles.header}
                                    numberOfLines={2}
                                />
                                <SText
                                    title={slider?.description}
                                    style={styles.desc}
                                    numberOfLines={3}
                                />
                                {index == intros.length - 1 && <StartBtn />}
                            </View>
                        </ImageBackground>
                    );
                })}
            </Swiper>
        </View>
        )
}


const styles = StyleSheet.create({
    pagination: {
        alignSelf: "center",
    },
    dotCircle: {
        width: moderateScale(10),
        height: moderateScale(10),
        borderRadius: moderateScale(10),
        marginHorizontal: 2,
        backgroundColor: COLORS.mainLight,
    },
    active: {
        backgroundColor: COLORS.main,
        width: moderateScale(30),
        height: moderateScale(10),
        borderRadius: moderateScale(10),
    },

    img: {
        width: "100%",
        height: height,
        resizeMode: "contain",
    },
    header: {
        marginTop: moderateScale(20),
        fontSize: moderateScale(17),
        color: COLORS.white,
        textAlign: "center",
        alignSelf: "center",
        fontFamily: fonts.bold,
        width: "80%",
    },
    desc: {
        color: COLORS.white,
        fontSize: moderateScale(15),
        textAlign: "center",
        width: "80%",
        marginTop: height * 0.02,
        lineHeight: moderateScale(33),
        opacity: 0.92,
        alignSelf: "center",
        fontFamily: fonts.bold,
    },
    commonBtn: {
        width: "40%",
        backgroundColor: COLORS.secondary,
    },

    startIcon: {
        width: moderateScale(50),
        height: moderateScale(50),
        textAlign: "center",
        lineHeight: moderateScale(50),
        color: COLORS.white,
        backgroundColor: COLORS.main,
        marginEnd: moderateScale(15),
        borderRadius: moderateScale(5),
        overflow: "hidden",
        fontSize: moderateScale(35),
    },
    startBtnContainer: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        marginTop: moderateScale(40),
        position: "relative",

    },
    startText: {
        fontSize: moderateScale(20),
        color: COLORS.receipt,
        fontFamily: fonts.bold,
    },
});
