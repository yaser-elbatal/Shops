import { COLORS, FeatherIcons, fonts, moderateScale, scale, verticalScale, width } from '@common';
import React, { useMemo, useState } from 'react';
import { StyleSheet, View, Image, Dimensions, Modal, TouchableOpacity, TouchableWithoutFeedback, } from 'react-native';
import Carousel, { Pagination } from 'react-native-x2-carousel';
import { BgView } from '../BgView';
import Gallery from "react-native-image-gallery";
import { SText } from '../SText';
import { CloseSvg } from '@SVG';

const SLIDER_WIDTH = Dimensions.get('window').width;

const DEFAULT_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg";



export const Slider = ({
    children,
    items,
    image,
    styleContainer,
    ImgStyle,
    CourslStyle,
    loading,
}) => {


    const [modalVisibilty, setModalVisibilty] = useState(false);


    let customImages =
        items && items?.length > 0
            ? items?.map((e) => {
                return {
                    source: { uri: e?.image },
                };
            })
            : [
                {
                    source: { uri: image },
                },
            ];


    const RenderItem = (data,) =>
    (
        <TouchableOpacity style={[styles.item, styleContainer]} key={Math.random()} onPress={() => { setModalVisibilty(true); }} activeOpacity={.8}>
            <Image
                style={[styles.image, ImgStyle]}
                source={{ uri: data.image }}
            />
            <BgView style={{ borderRadius: scale(10), }} />
        </TouchableOpacity >
    )





    return useMemo(() => {

        return (
            <View style={{ backgroundColor: null, marginHorizontal: '2%' }}>
                {
                    items && items?.length > 0 ?
                        <View style={[styles.container, CourslStyle]}>
                            <Carousel
                                autoplay={true}
                                autoplayInterval={5000}
                                loop={true}
                                pagination={(props) => <Pagination  {...props} />}
                                renderItem={RenderItem}
                                data={items && items}
                                keyExtractor={(_item, i) => i.toString()}

                            />
                        </View>
                        :
                        <TouchableWithoutFeedback onPress={() => { setModalVisibilty(true); }} activeOpacity={.8}>
                            {children ? children : <View />}
                        </TouchableWithoutFeedback>

                }


                <Modal animationType="slide" transparent={true} visible={modalVisibilty} >
                    <Gallery
                        style={{ flex: 1, backgroundColor: "rgba(0,0,0,1)" }}
                        images={customImages}

                    />

                    <TouchableOpacity style={styles.iconContainer} onPress={() => setModalVisibilty(false)}>
                        <View style={styles.iconContainer}>
                            <CloseSvg />
                        </View>
                        <SText title={'Close'} />
                    </TouchableOpacity>
                </Modal>



            </View>

        );
    }, [items, loading, modalVisibilty,]);
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        marginTop: verticalScale(12),
        borderRadius: scale(10),

    },

    item: {
        width: width * .96,
        height: moderateScale(200),

    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: scale(10),
        zIndex: 0,
        position: "relative",
    },
    title: {
        color: COLORS.black,
        position: 'absolute',
        fontSize: moderateScale(14),
        alignSelf: 'flex-end',
        margin: scale(10),
        right: scale(0),
        fontFamily: fonts.bold
    },

    heart: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: scale(0),
        margin: moderateScale(10),
        zIndex: 999,

    },
    trash: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: scale(0),
        margin: moderateScale(5),
        zIndex: 999,
        backgroundColor: COLORS.gray,
        borderRadius: moderateScale(20)
    },
    icon: {
        color: COLORS.error,
        fontSize: moderateScale(40),
    },
    iconContainer: {
        position: "absolute",
        zIndex: 9999,
        top: width * 0.01 + verticalScale(20),
        end: width * 0.04,
    },
    close: {
        color: COLORS.white,
        fontSize: width * 0.09,
    },
    circle: {
        backgroundColor: COLORS.white,
        width: moderateScale(25),
        height: moderateScale(25),
        borderRadius: moderateScale(25),
        position: 'absolute',
        bottom: moderateScale(200),
        alignSelf: 'center',

    },
    containerArrow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        position: 'absolute',
        bottom: scale(400),
        width: '98%',
    },
    iconTrash: {
        color: "black",
        fontSize: moderateScale(30),
        padding: scale(5)
    },
    btnConfirm: {
        backgroundColor: COLORS.main,
        width: scale(140),
        marginTop: verticalScale(25),

    },
    Cancelbtn: {
        marginTop: verticalScale(25),
        backgroundColor: COLORS.black,
        width: scale(140),
        paddingHorizontal: scale(10)
    },
    wrapBtn: {
        flexDirection: 'row',
        marginTop: verticalScale(30),
        alignItems: 'center',
        justifyContent: 'space-around'
    },

});

