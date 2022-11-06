import { Platform } from "react-native";
import { COLORS } from "./Colors";
import { moderateScale, scale } from "./Scalling";

export const CommonStyle = {
  shadow: {
    shadowColor: COLORS.main,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.main,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      android: {
        elevation: 1,
        shadowColor: COLORS.main,
      },
    }),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowSpace: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  hitSlop: {
    right: scale(15),
    left: scale(15),
    top: scale(15),
    bottom: scale(15),
  }
};
