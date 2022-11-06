import { Image, } from 'react-native'
import React, { useState } from 'react'
import { AccountGoMessage, Btn, BtnBack, Container, ImageInput, Input, InputMobile, InputWithModal } from '@components'
import { Department, Images } from '@common'
import { styles } from './styles'
import i18n from '@locale'
import { BranchSVG, EmailSVG, PasswordSVG, UserSVG } from '@SVG'
import { toCodeActivation, toGoBack, } from '@routes'

export const Register = () => {

    const [inputValues, setInputValues] = useState({
        nameAr: "",
        nameEn: "",
        email: "",
        logoIMG: "",
        backgroundImg: "",
        phone: "",
        country_code: "+966",
        department: "",
        password: "",
        confirmPassword: "",
    });


    const handleInput = (key, value) => setInputValues({ ...inputValues, [key]: value });

    return (
        <Container
            header={true}
            scrollEnabled={true}
            saveArea={false}
        >
            <BtnBack />
            <Image source={Images.logo} style={styles.logo} />
            <Input
                label={i18n.t("nameAr")}
                placeholder={i18n.t("nameAr")}
                value={inputValues.nameAr}
                onChangeText={(value) => handleInput("nameAr", value)}
                StartIcon={<UserSVG />}
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
            />
            <ImageInput
                label={i18n.t('backgroundIMg')}
                onPick={(e) => { handleInput("backgroundImg", e); console.log('e', e); }}
            />
            <InputWithModal
                title={i18n.t("department")}
                placeholder={i18n.t("selectDepartment")}
                selectionData={Department}
                selectedItem={(e) => handleInput("department", e?.id)}
                startIcon={<BranchSVG />}
            //   id={inputs.categoryId}
            //   name={inputs.CategoryName}
            />

            <Input
                StartIcon={<PasswordSVG />}
                label={i18n.t("password")}
                onChangeText={(value) => handleInput("password", value)}
                secureTextEntry={true}
                placeholder={i18n.t("password")}
                value={inputValues.password}

            />

            <Input
                label={i18n.t("confirmPass")}
                placeholder={i18n.t("confirmPass")}
                onChangeText={(value) => handleInput("confirmPass", value)}
                secureTextEntry={true}
                value={inputValues.password}
                StartIcon={<PasswordSVG />}

            />

            <Btn
                // loading={loading}
                text={i18n.t("confirm")}
                onPress={() => toCodeActivation()}
                btnStyle={styles.btn}
            />
            <AccountGoMessage
                firstMess={i18n.t("haveAccount")}
                secondMess={i18n.t("login")}
                action={() => toGoBack()}
            />

        </Container>
    )
}


