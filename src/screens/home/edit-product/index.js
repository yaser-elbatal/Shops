import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Btn, BtnBack, Container, Header, ImageInput, Input, InputWithModal, SText } from '@components'
import { COLORS, DepartmentType, fonts, moderateScale, scale, verticalScale, width } from '@common'
import i18n from '@locale'
import { BranchSVG, ProductsSVG, RyalSVG } from '@SVG'

export const EditProduct = () => {


    const [inputValues, setInputValues] = useState({
        ProductAr: "",
        ProductEn: "",
        productImg: "",
        logoIMG: "",
        ProductType: "",
        ProductPrice: "",
        ProductDescAr: "",
        ProductDescEn: "",


    });
    const handleInput = (key, value) => setInputValues({ ...inputValues, [key]: value });


    return (
        <View style={styles.container}>
            <Header
                center={<SText title={i18n.t("editProduct")} style={{ fontFamily: fonts.bold, }} />}
                start={<BtnBack color={COLORS.black} />}

            />
            <Container
                header={true}
                style={styles.content}
                scrollEnabled={true}
                saveArea={false}
            >
                <Input
                    label={i18n.t("ProductAr")}
                    placeholder={i18n.t("ProductAr")}
                    value={inputValues.ProductAr}
                    onChangeText={(value) => handleInput("ProductAr", value)}
                    StartIcon={<ProductsSVG />}
                    containerStyle={{ marginTop: verticalScale(30) }}
                />

                <Input
                    label={i18n.t("ProductEn")}
                    placeholder={i18n.t("ProductEn")}
                    value={inputValues.ProductEn}
                    onChangeText={(value) => handleInput("ProductEn", value)}
                    StartIcon={<ProductsSVG />}
                />

                <Input
                    label={i18n.t("ProductPrice")}
                    placeholder={i18n.t("ProductPrice")}
                    value={inputValues.ProductPrice}
                    onChangeText={(value) => handleInput("ProductPrice", value)}
                    StartIcon={<RyalSVG />}
                />


                <ImageInput
                    label={i18n.t('ProductImage')}
                    onPick={(e) => { handleInput("productImg", e); console.log('e', e); }}
                />

                <InputWithModal
                    title={i18n.t("ProductType")}
                    placeholder={i18n.t("ProductType")}
                    selectionData={DepartmentType}
                    selectedItem={(e) => handleInput("ProductType", e?.id)}
                    startIcon={<BranchSVG />}
                //   id={inputs.categoryId}
                //   name={inputs.CategoryName}
                />

                <Input
                    label={i18n.t("ProductDescAr")}
                    placeholder={i18n.t("ProductDescAr")}
                    onChangeText={(value) => handleInput("ProductDescAr", value)}
                    value={inputValues.ProductDescAr}
                    numberOfLines={4}
                    multiline
                    contentContainerStyle={{ height: moderateScale(100), }}
                    style={{ textAlignVertical: "top", marginTop: moderateScale(5) }}

                />

                <Input
                    label={i18n.t("ProductDescEn")}
                    placeholder={i18n.t("ProductDescEn")}
                    onChangeText={(value) => handleInput("ProductDescEn", value)}
                    value={inputValues.ProductDescEn}
                    numberOfLines={4}
                    multiline
                    contentContainerStyle={{ height: moderateScale(100), }}
                    style={{ textAlignVertical: "top", marginTop: moderateScale(5) }}

                />

                <Btn
                    // loading={loading}
                    text={i18n.t("Save")}
                    onPress={() => { }}
                    btnStyle={styles.btn}
                />

            </Container>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        paddingHorizontal: scale(10),
        backgroundColor: COLORS.white
    },
    btn: {
        marginTop: moderateScale(35),
        width: null,
        minWidth: width * 0.4,
    },
})