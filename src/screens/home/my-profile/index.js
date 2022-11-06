import { View, } from 'react-native'
import React, { useState } from 'react'
import i18n from '@locale'
import { COLORS, fonts, verticalScale } from '@common'
import { Btn, BtnBack, Container, Header, ImageInput, Input, InputMobile, InputWithModal, SText } from '@components'
import { Department, } from '@common'
import { BranchSVG, EmailSVG, PasswordSVG, UserSVG } from '@SVG'

export const MyProfile = () => {

    const [inputValues, setInputValues] = useState({
        nameAr: "ياسر",
        nameEn: "yasser",
        email: "yaserelbatal7@gmail.com",
        logoIMG: "",
        backgroundImg: "",
        phone: "01029991120",
        country_code: "+966",
        departmentID: 1,
        departmentName: 'محل ملابس',

    });


    const handleInput = (key, value) => setInputValues({ ...inputValues, [key]: value });


    return (
        <View style={{ flex: 1 }}>
            <Header
                center={<SText title={i18n.t("myProfile")} style={{ fontFamily: fonts.bold, }} />}
                start={<BtnBack color={COLORS.black} />
                } />

            <Container
                header={true}
                scrollEnabled={true}
            >
                <Input
                    label={i18n.t("nameAr")}
                    placeholder={i18n.t("nameAr")}
                    value={inputValues.nameAr}
                    onChangeText={(value) => handleInput("nameAr", value)}
                    StartIcon={<UserSVG />}
                    contentContainerStyle={{ marginTop: verticalScale(25), }}
                />

                <Input
                    label={i18n.t("nameEn")}
                    placeholder={i18n.t("nameEn")}
                    value={inputValues.nameEn}
                    onChangeText={(e) => handleInput("nameEn", e)}
                    StartIcon={<UserSVG />}
                />

                <InputMobile
                    label={i18n.t("phone")}
                    onChangeText={(value) => handleInput("phone", value)}
                    onChangeKey={(e) => handleInput("key", e)}
                    keyboardType={'phone-pad'}
                    value={inputValues.phone}

                />

                <Input
                    label={i18n.t("email")}
                    placeholder={i18n.t("email")}
                    value={inputValues.email}
                    onChangeText={(e) => handleInput("email", e)}
                    StartIcon={<EmailSVG />}
                />

                <ImageInput
                    label={i18n.t('logo')}
                    onPick={(e) => { handleInput("logoIMG", e); console.log('e', e); }}
                    CoverImage={'https://cdn.dribbble.com/userupload/3158903/file/original-3f5abe8b99ff4ba4626ddf6660115182.jpg?compress=1&resize=752x'}

                />
                <ImageInput
                    label={i18n.t('backgroundIMg')}
                    onPick={(e) => { handleInput("backgroundImg", e); console.log('e', e); }}
                    CoverImage={'https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?w=1800&t=st=1666266251~exp=1666266851~hmac=a89ebdd97e753cc726d0ecb157a00cd683b7bca7cb1ffdeb98240b417cf9747b'}
                />
                <InputWithModal
                    title={i18n.t("department")}
                    placeholder={i18n.t("selectDepartment")}
                    selectionData={Department}
                    selectedItem={(e) => handleInput("department", e?.id)}
                    startIcon={<BranchSVG />}
                    id={inputValues.departmentID}
                    name={inputValues.departmentName}
                />


                <Btn
                    // loading={loading}
                    text={i18n.t("confirm")}
                // btnStyle={styles.btn}
                />
            </Container>
        </View>
    )
}

