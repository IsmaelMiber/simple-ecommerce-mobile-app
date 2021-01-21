import { StyleProp, StyleSheet } from "react-native";
import { Fonts, FontSizes } from "./Fonts";
import { Colors } from "./Colors";
import { Spaces } from "./Spaces";

const center: object = {
  justifyContent: "center",
  alignItems: "center",
};

export default StyleSheet.create({
  text: {
    fontFamily: Fonts.SemiBold,
    fontSize: FontSizes.Small,
    textAlign: "left",
    color: Colors.Secondary,
    flexShrink: 1,
  },

  errorText: {
    color: Colors.Danger,
  },

  bottomSpace: {
    marginBottom: Spaces.Small,
  },

  spaceBetweenCenter: {
    justifyContent: "space-between",
    alignItems: "center",
  },

  center,

  centerContainer: {
    flex: 1,
    ...center,
  },
});
