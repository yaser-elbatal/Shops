import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Text,
} from "react-native";
import { COLORS, verticalScale } from "../../common";
// import { LogoSpinner } from "../LogoSpinner";
import { NoInternet } from "./NoInternet";
import { useSelector } from "react-redux";

export const Container = ({
  children,
  scrollEnabled = false,
  keyboardShouldPersistTaps,
  loading = false,
  saveArea = true,
  header = false,
  style,
  contentContainerStyle,
  spinner,
  keyboardVerticalOffset,
}) => {
  const { network } = useSelector((state) => state.general);

  let renderContent = () => {
    return scrollEnabled ? (
      // <View style={{ flex: 1 }}>
      <ScrollView
        style={[styles.containerScrollView, style]}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    ) : (
      // </View>
      <View style={[styles.Container, style]}>{children}</View>
    );
  };

  return loading ? (
    spinner ? (
      spinner
    ) : (
      <View>
        <Text>Spinner</Text>
      </View>
    )
  ) : // <LogoSpinner fullStretch />
    network ? (
      saveArea ? (
        <SafeAreaView style={header ? { flex: 1 } : styles.saveArea}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-10}
          >
            {renderContent()}
          </KeyboardAvoidingView>
        </SafeAreaView>
      ) : (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={10}
        >
          {renderContent()}
        </KeyboardAvoidingView>
      )
    ) : (
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <NoInternet />
      </View>
    );
};

const styles = StyleSheet.create({
  saveArea: {
    paddingTop: verticalScale(10),
    flex: 1,
  },
  Container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: null,
  },
  containerScrollView: {
    // flex: 1,
    backgroundColor: COLORS.white,
    // borderColor: "red",
    // borderWidth: 1,
  },
});
