import { Keyboard, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddServices, Home, MyAccount, MyOrders } from '@screens';
import { ADDSVG, HomeTabSvg, OrdersTabSvg, ProfileTabsSvg } from '@SVG';
import * as Animatable from "react-native-animatable";
import { COLORS, CommonStyle, fonts, moderateScale, scale, verticalScale } from '@common';
import i18n from '@locale';



const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation, hideTabs }) => {
    return (
        <View style={[styles.tabContainer, hideTabs && { display: "none" }]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : i18n.t(`tabs.${route.name}`);

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route?.name);
                    }
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ["selected"] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPressIn={onPress}
                        style={styles.tabC}
                        key={index}
                        activeOpacity={0.6}
                        hitSlop={CommonStyle.hitSlop}
                    >
                        <Animatable.View
                            style={[styles.row, isFocused ? styles.active : styles.unActive]}
                            animation={"fadeIn"}
                            delay={index * 200}
                        >
                            {options.svg(isFocused)}

                            {/* <SText
                                title={label}
                                style={isFocused ? styles.textActive : styles.textUnActive}
                            /> */}
                        </Animatable.View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
export const HomeTabs = () => {
    const [hideTabs, setHideTabs] = useState(false);

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", () => setHideTabs(true));
        Keyboard.addListener("keyboardDidHide", () => setHideTabs(false));
    }, []);

    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            tabBar={(props) => <MyTabBar hideTabs={hideTabs} {...props} />}
            screenOptions={{
                headerShown: false,
                keyboardHidesTabBar: true,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    borderTopStartRadius: scale(25),
                    borderTopEndRadius: scale(25),
                },


            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    svg: (isFocused) => <HomeTabSvg isFocused={isFocused} />,
                }}
            />
            <Tab.Screen
                name="Orders"
                component={MyOrders}
                options={{
                    svg: (isFocused) => <OrdersTabSvg isFocused={isFocused} />,
                }}
            />

            <Tab.Screen
                name="AddServices"
                component={AddServices}
                options={{
                    svg: (isFocused) => <ADDSVG isFocused={isFocused} />,
                }}

            />
            <Tab.Screen
                name="Profile"
                component={MyAccount}
                options={{
                    svg: (isFocused) => <ProfileTabsSvg isFocused={isFocused} />,
                }}



            />


        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabC: {
        flex: 1,
        alignItems: "center",
    },
    tabContainer: {
        flexDirection: "row",
        backgroundColor: COLORS.white,
        height: verticalScale(60),
        // height: IS_IOS ? verticalScale(75) : verticalScale(60),
        borderRadius: 0,
        alignItems: "center",

        // paddingBottom: IS_IOS ? moderateScale(13) : null,
    },
    row: {
        // flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: moderateScale(10),
    },
    active: {
        // borderRadius: 50,
        // backgroundColor: COLORS.main,
        backgroundColor: "transparent",
    },
    textActive: {
        color: COLORS.main,
        marginTop: moderateScale(1),
        fontSize: moderateScale(10),
        fontFamily: fonts.bold,
    },
    textUnActive: {
        color: COLORS.grey,
        marginTop: moderateScale(1),
        fontSize: moderateScale(10),
    },
});

