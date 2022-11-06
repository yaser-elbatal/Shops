import React from 'react'
import { StyleSheet, } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EasingNode } from "react-native-reanimated";
import { Login, IntroSlider, ShowLang, Register, CodeActivation, ChangePassword } from '@screens';




const Stack = createNativeStackNavigator();

const config = {
    animation: "timing",
    config: {
        duration: 120,
        easing: EasingNode.linear,
    },
};
const option = {
    transitionSpec: {
        open: config,
        close: config,
    },
};
export const AuthNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}
        >

            <Stack.Screen name="Login" component={Login} options={option} />
            <Stack.Screen name="Register" component={Register} options={option} />
            <Stack.Screen name="CodeActivation" component={CodeActivation} options={option} />

        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({})