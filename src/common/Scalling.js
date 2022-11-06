import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const guidelineBaseWidth = 428;

export const guidelineBaseHeight = 926;

export const widthRatio = width / guidelineBaseWidth;

export const heightRatio = height / guidelineBaseHeight;

export const scale = (size) => widthRatio * size;

export const verticalScale = (size) => heightRatio * size;

export const defaultModerateFactor = width > guidelineBaseWidth ? 0.5 : 1.25;

export const moderateScale = (size, factor = defaultModerateFactor) =>
    size + (scale(size) - size) * factor;
