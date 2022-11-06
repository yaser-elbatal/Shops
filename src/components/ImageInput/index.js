import { COLORS, fonts, moderateScale, scale, verticalScale, width } from "@common";
import i18n from "@locale";
import { CameraPhotoSVG, CameraSVG, GallerySVG } from "@SVG";
import { Fragment, useState } from "react";
import { I18nManager, Image, Platform, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { BottomModalSwiping } from "../BottomModalSwiping";
import { lineHeights, margin, MIN_HEIGHT, sizes } from "../config";
import { PickImage } from "../PickImage";
import { SText } from "../SText";


const Imgdefault = 'https://www.sayidaty.net/sites/default/files/styles/1375_scale/public/2022-02/50929.jpeg?itok=Mx2zjsKB'
const BOTTOM = moderateScale(margin.base - 8);

export const ImageInput = ({ logoUrl, style, label, SelectImage, action, onPick, CoverImage, confirmRemove, loading }) => {

    const [getImage, setgetImage] = useState(CoverImage || Imgdefault);
    const [OpenModal, setOpenModal] = useState(false);
    const [photos, setPhotos] = useState(CoverImage || []);
    const [logoModal, setlogoModal] = useState(false)


    const PickPice = async (type, action) => {

        let result = await PickImage(type);

        console.log('result', result);
        if (!result) {
            return null;
        }
        else {
            setgetImage(result?.path)
            let pathParts = result?.path?.split("/");
            let info = {
                uri: Platform.OS == 'android' ? result?.path : result?.path.replace('file://', ''),
                name: Platform.OS == 'android'
                    ? pathParts[pathParts.length - 1]
                    : result['filename'],
                type: result.mime,
            };
            onPick && onPick(info, result?.path);
            setOpenModal(false)

        }
    }
    function confirmDelete(i) {
        photos.splice(i, 1);
        setPhotos([...photos]);
        SelectImage && SelectImage([...photos]);

    };

    return (
        <Fragment>

            <TouchableWithoutFeedback onPress={() => setOpenModal(true)}>
                <View
                    style={[
                        styles.container,
                        getImage !== Imgdefault && { borderColor: COLORS.lightgrey },
                        style,
                    ]}
                >
                    <View style={{ alignSelf: 'center' }}>
                        <CameraSVG />
                    </View>
                    {getImage !== Imgdefault && (
                        <View style={styles.labelContainer}>
                            <SText title={label} style={styles.label} />
                        </View>
                    )}
                    <View>
                        {getImage !== Imgdefault ?
                            <Image source={{ uri: getImage }} style={styles.Logo} />
                            :
                            <SText
                                title={label}
                                style={[
                                    styles.selectedText,
                                    getImage == Imgdefault && styles.unSelectedColor,
                                ]}
                            />
                        }
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <BottomModalSwiping
                visible={OpenModal}
                close={() => setOpenModal(false)}

            >
                <View>
                    <SText style={{ alignSelf: 'center', }} title={i18n.t('choosePice')} />
                    <View style={styles.wrapBtn}>
                        <TouchableOpacity style={styles.card} onPress={() => PickPice('camera', action)}>
                            <SText style={{ alignSelf: 'center', fontFamily: fonts.regular }} title={i18n.t('Camera')} />
                            <CameraPhotoSVG />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.card,]} onPress={() => PickPice('library', action)}>
                            <SText style={{ alignSelf: 'center', fontFamily: fonts.regular }} title={i18n.t('Gallery')} />
                            <GallerySVG />
                        </TouchableOpacity>

                    </View>
                </View>
            </BottomModalSwiping>
        </Fragment>

    )

}

const styles = StyleSheet.create({

    labelContainer: {
        backgroundColor: COLORS.white,
        position: "absolute",
        top: -moderateScale(15),
        start: moderateScale(5),
        zIndex: 9999,
    },
    label: {
        fontSize: moderateScale(16),
        marginHorizontal: moderateScale(5),

    },
    icon: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.white,
        // height: moderateScale(42),
        paddingHorizontal: moderateScale(10),
        paddingStart: moderateScale(15),
        minHeight: moderateScale(65),
        borderWidth: 1,
        borderRadius: moderateScale(sizes.base),
        marginTop: moderateScale(15),
        marginBottom: BOTTOM,
        borderColor: COLORS.lightgrey,
        marginHorizontal: '2%'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: "flex-start"
    },
    selectedText: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(lineHeights.base),

        textAlignVertical: "center",
        ...Platform.select({
            android: {
                textAlign: I18nManager.isRTL ? "right" : "left",
            },
            ios: {
                writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
            },
        }),
        fontFamily: fonts.Medium,
        color: COLORS.grey,
        marginHorizontal: scale(10)
    },
    unSelectedColor: {
        color: COLORS.grey,
        fontSize: moderateScale(16),

    },
    wrapBtn: {
        flexDirection: 'row',
        marginTop: verticalScale(30),
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    card: {
        borderWidth: 1,
        padding: scale(10),
        borderRadius: scale(12),
        marginHorizontal: scale(10),
    },
    Logo: {
        height: moderateScale(50),
        width: width * .1,
        resizeMode: 'contain',
        margin: scale(8),
        borderRadius: scale(12)
    },
    wrapImage: {
        height: moderateScale(150),
        width: width / 4 - scale(15),
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderStyle: 'dotted',
        marginTop: scale(20)

    },

    img: {
        width: '100%',
        height: '100%',
        borderRadius: moderateScale(12),
        resizeMode: 'cover'

    },
    closeIcon: {
        color: COLORS.error,

    },
    wrpIcon: {
        top: moderateScale(-15),
        position: 'absolute',
        alignSelf: 'flex-end',
        right: moderateScale(-10),
        zIndex: 999,

    },
    wrapAvatar: {
        borderWidth: 1,
        width: moderateScale(90),
        height: moderateScale(90),
        borderRadius: moderateScale(90),
        alignSelf: 'center',
        marginTop: verticalScale(30)

    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: moderateScale(90),
        resizeMode: 'cover'
    },
    wrapIcon: {
        alignSelf: 'flex-start',
        zIndex: 9999,
        backgroundColor: 'white',
        bottom: 0,
        borderRadius: moderateScale(20),
        alignItems: 'center',
        position: 'absolute',
    },
    btn: {
        marginTop: verticalScale(25),
        backgroundColor: COLORS.black,
        width: null,
        paddingHorizontal: scale(10)
    },

})