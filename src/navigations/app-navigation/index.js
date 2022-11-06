import React from 'react'
import { StyleSheet, } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EasingNode } from "react-native-reanimated";
import { HomeTabs } from '../home-tabs';
import { AboutApp, ChangePassword, ContactUs, EditProduct, MyProfile, ProductDetails, ShowLang } from '@screens';




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
const closeConfig = {
    animation: "timing",
    config: {
        duration: 100,
        easing: EasingNode.linear,
    },
};
export const AppNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                transitionSpec: {
                    open: config,
                    close: closeConfig,
                },
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={option} />
            <Stack.Screen name="ContactUS" component={ContactUs} options={option} />
            <Stack.Screen name="AboutApp" component={AboutApp} options={option} />
            <Stack.Screen name="ShowLang" component={ShowLang} options={option} />
            <Stack.Screen name="MyProfile" component={MyProfile} options={option} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={option} />
            <Stack.Screen name="EditProduct" component={EditProduct} options={option} />


        </Stack.Navigator>
    )
}


