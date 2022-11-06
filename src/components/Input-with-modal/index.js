import React, { useCallback, useState } from "react";
import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
} from "react-native";
import { COLORS, moderateScale } from "../../common";
import { BottomModalSwiping } from "../BottomModalSwiping";
import * as Animatable from "react-native-animatable";
import { BgView } from "../BgView";
import { SText } from "../SText";
import { InputText } from "../TextInput";
import { DownSVG } from "@SVG";
import { Input } from "../Input/Input";

const InputWithModal = ({
    selectionData,
    selectedItem,
    title,
    id,
    name,
    error,
    placeholder,
    startIcon
}) => {
    const [visibleModal, setVisibleModal] = useState(false);
    const [selected, setSelected] = useState({
        name: name || null,
        id: id || null,
    });

    const handleSelection = (item) => {
        setVisibleModal(false);
        setSelected(item);
        selectedItem && selectedItem(item);
    };
    return (
        <View>
            <TouchableOpacity
                onPress={useCallback(() => setVisibleModal(true), [])}
                activeOpacity={0.8}
            >

                <Input
                    label={title}
                    placeholder={title}
                    disabled={true}
                    EndIcon={<DownSVG />}
                    value={selected.name}
                    error={error}
                    startIcon={startIcon}
                />
                {/* <InputText
                    placeholder={selected.name?.length > 0 ? selected.name : placeholder}
                    value={selected.name}
                    EndIcon={<DownSVG />}
                    StartIcon={startIcon}
                    editable={false}
                /> */}
                <View style={styles.fixedView} />
            </TouchableOpacity>
            <BottomModalSwiping
                header={title}
                visible={visibleModal}
                close={() => setVisibleModal(false)}
                style={{ flexGrow: 1 }}
                swipeDirection={null}
            >
                <View>
                    <FlatList
                        data={selectionData}
                        // numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => handleSelection(item)}
                                    activeOpacity={0.8}
                                >
                                    <Animatable.View
                                        animation={"fadeInUp"}
                                        delay={index * 50}
                                        key={index}
                                        style={styles.list}
                                    >
                                        {selectionData[index].id == selected.id && (
                                            <BgView style={styles.opacity} />
                                        )}
                                        <SText title={item.name} style={[styles.codeText, { color: selectionData[index].id == selected.id ? COLORS.white : COLORS.black }]} />
                                        {/* {item.icon && (
                      <Image source={{ uri: item.icon }} style={styles.image} />
                    )} */}
                                    </Animatable.View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            </BottomModalSwiping>
        </View>
    );
};

export { InputWithModal };

const styles = StyleSheet.create({
    list: {
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(10),
        marginVertical: moderateScale(7),
        backgroundColor: COLORS.lightgrey,
        alignSelf: "center",
        borderRadius: moderateScale(10),
        width: "90%",
        marginHorizontal: "4%",
        minHeight: moderateScale(50),
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    opacity: {
        borderRadius: moderateScale(10),
        backgroundColor: COLORS.main,
    },
    codeText: {
        fontSize: moderateScale(14),
    },
    fixedView: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    image: {
        width: moderateScale(50),
        height: moderateScale(40),
        resizeMode: "contain",
    },
});
