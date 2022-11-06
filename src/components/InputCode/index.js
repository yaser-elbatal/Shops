import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, I18nManager } from "react-native";

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { COLORS, CommonStyle, fonts, width, moderateScale, scale } from "@common";

const CELL_COUNT = 4;

const InputCode = ({ onFulfill }) => {
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.root}>
            <CodeField
                onBlur={() => onFulfill && onFulfill(value)}
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                autoFocus={true}
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[
                            styles.cell,
                            isFocused && styles.focusCell,
                            symbol && {
                                backgroundColor: COLORS.greyLight,
                                color: COLORS.main,
                                borderRadius: width * 0.1,

                            },
                        ]}
                        onLayout={getCellOnLayoutHandler(index)}
                    >
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: { padding: moderateScale(10), paddingTop: 0 },
    title: { textAlign: "center", fontSize: 30 },
    codeFiledRoot: {
        marginTop: moderateScale(30),
        marginBottom: moderateScale(23),
        width: "100%",
        alignSelf: "center",
        flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
        borderRadius: width * 0.1,

    },
    cell: {
        width: width * 0.15,
        height: width * 0.15,
        lineHeight: width * 0.15,
        fontSize: moderateScale(27),
        borderRadius: width * 0.1,
        ...CommonStyle.shadow,
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: COLORS.black,
        textAlign: "center",
        // borderWidth: moderateScale(1),
        borderColor: COLORS.grey,
        fontFamily: fonts.regular,
        color: COLORS.black,
        backgroundColor: COLORS.white,
        marginHorizontal: scale(2),

    },
    focusCell: {
        borderColor: COLORS.grey,
        backgroundColor: COLORS.greyLight,
        borderRadius: width * 0.1,
    },
});

export { InputCode };
