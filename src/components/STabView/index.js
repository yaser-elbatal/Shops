import React, { useState, useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS, width, fonts, IS_IOS, moderateScale } from "../../common";
import { Spinner } from "../Spinner";
import { TabView, TabBar } from "react-native-tab-view";

export const STabView = ({
    tabs,
    tabStyle,
    scrollEnabled,
    selectedIndex,
    indexSelected,
    renderScene,
    ...restProps
}) => {
    // For React Native Tab View
    const [index, setIndex] = useState(selectedIndex ? selectedIndex : 0);
    const [routes, setRoutes] = useState(tabs);

    const handleChangeIndex = (e) => {
        indexSelected && indexSelected(e);
        if (index != e) setIndex(e);
    };

    const renderTabBar = useCallback(
        (props) => (
            <TabBar
                {...props}
                getLabelText={({ route }) => route.title}
                activeColor={COLORS.main}
                inactiveColor={COLORS.grayDark}
                labelStyle={{
                    fontSize: IS_IOS ? moderateScale(13) : moderateScale(16),
                    fontFamily: fonts.Medium,
                    textAlign: "center",
                    color: COLORS.black,
                }}
                // onIndexChange={e => changeTab(e)}
                style={{ backgroundColor: COLORS.white }}
                indicatorStyle={{ backgroundColor: COLORS.main }}
                pressColor={COLORS.grayDark}
                pressOpacity={0.7}
                tabStyle={tabStyle}
                scrollEnabled={scrollEnabled}
                removeClippedSubviews={false}
            />
        ),
        []
    );

    return (
        <View style={{ flex: 1 }}>
            <TabView
                navigationState={{ index, routes }}
                onIndexChange={handleChangeIndex}
                initialLayout={width}
                renderTabBar={renderTabBar}
                // For Performance
                // if all cats show white screen delete this line
                removeClippedSubviews={IS_IOS ? false : true}
                // removeClippedSubviews={true}
                lazy={true}
                renderLazyPlaceholder={() => <Spinner mode="full" />}
                // timingConfig={1}
                renderScene={renderScene}
                {...restProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({});
