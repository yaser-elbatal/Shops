import { Image, } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IntroSlider } from '../Intro-slider';
import { AccountGoMessage, Btn, Container, Input, InputMobile, } from '@components';
import { Images } from '@common';
import { PasswordSVG, } from '@SVG';
import i18n from '@locale';
import { styles } from './styles';
import { toRegister } from '@routes';
import { loginAction } from '@action';

export const Login = () => {

    const { introSeen, } = useSelector((state) => state.general);

    const [inputs, setInputs] = useState({
        key: '',
        phone: '',
        password: '',

    })



    const dispatch = useDispatch()
    const handleInputs = (key, value) => setInputs({ ...inputs, [key]: value });
    const confirmLogin = () => dispatch(loginAction(inputs))


    return !introSeen ? (
        <IntroSlider />
    ) : (
        <Container scrollEnabled={true}  >
            <Image source={Images.logo} style={styles.logo} />

            <InputMobile
                label={i18n.t("phone")}
                onChangeText={(value) => handleInputs("phone", value)}
                keyboardType={'phone-pad'}
                onChangeKey={(e) => handleInputs("key", e)}
            />
            <Input
                StartIcon={<PasswordSVG />}
                label={i18n.t("password")}
                onChangeText={(value) => handleInputs("password", value)}
                secureTextEntry={true}
                placeholder={i18n.t("password")}
            />
            <Btn
                // loading={loading}
                text={i18n.t("login")}
                onPress={confirmLogin}
                btnStyle={styles.btn}
                disable={inputs.phone.length == 0 || inputs.password.length == 0}
            />

            <AccountGoMessage
                firstMess={i18n.t("noAccount")}
                secondMess={i18n.t("newRegister")}
                action={() => toRegister()}
            />

        </Container>
    )
}


