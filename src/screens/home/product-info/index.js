import React, { useState } from 'react'
import { BottomModalSwiping, Btn, BtnBack, Container, Header, ImagePreview, SText } from '@components'
import { COLORS, CommonStyle, fonts, moderateScale, scale, verticalScale, width } from '@common'
import { TouchableOpacity, View } from 'react-native'
import { CancelSvg, DeleteSvg, EditSVG } from '@SVG'
import { styles } from './styles'
import i18n from '@locale'
import { Ratings } from 'src/components/Rating'
import { toEditProduct } from '@routes'

export const ProductDetails = ({ route }) => {
    let { title, image, price, productDesc, rate } = route?.params
    const [deltetProduct, setdeltetProduct] = useState(false)

    return (
        <Container header={true} scrollEnabled={true} >
            <Header
                center={<SText title={i18n.t('productInfo')} />}
                start={<BtnBack color={COLORS.black} />}
                end={<View style={CommonStyle.row}>
                    <TouchableOpacity style={{ marginEnd: scale(10) }} onPress={() => setdeltetProduct(true)}>
                        <DeleteSvg color={COLORS.error} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toEditProduct()}>
                        <EditSVG />
                    </TouchableOpacity>
                </View>}
            />
            <ImagePreview image={image} />
            <View style={styles.content}>

                <View style={CommonStyle.rowSpace}>
                    <SText title={title} style={styles.title} />
                    <SText title={price} style={{ fontFamily: fonts.bold, fontSize: moderateScale(18) }} />
                </View>

                <View style={CommonStyle.row}>

                    <SText title={i18n.t('serviceRate') + ":"} style={styles.serviceRate} />
                    <Ratings
                        starSize={moderateScale(15)}
                        disabled={true}
                        rating={rate}
                        containerStyles={{ marginHorizontal: scale(10) }}
                    />
                </View>
                <SText title={i18n.t('ProductInfo') + ":"} style={styles.productInfo} />
                <SText title={productDesc} />

            </View>


            <BottomModalSwiping
                visible={deltetProduct}
                close={() => setdeltetProduct(false)}
            // header={t('deletePrinter')}
            >

                <SText title={i18n.t('deleteProduct')} style={styles.title} />
                <View style={[CommonStyle.row, CommonStyle.center]}>
                    <Btn
                        text={i18n.t('Cancel')}
                        btnStyle={styles.check}
                        textStyle={styles.btnCheck}
                        SVG={<CancelSvg />}
                        onPress={() => setdeltetProduct(false)}

                    />

                    <Btn
                        text={i18n.t('confirm')}
                        btnStyle={[styles.delete, {
                            width: width / 3 - scale(20),
                        }]}
                        textStyle={styles.btnEdit}
                        SVG={<DeleteSvg />}
                        onPress={() => setdeltetProduct(false)}
                    />
                </View>
            </BottomModalSwiping>

        </Container>
    )
}

