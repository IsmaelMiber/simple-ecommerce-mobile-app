import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Fonts, FontSizes } from "../../Theme/Fonts";
import { Spaces } from "../../Theme/Spaces";
import { calcWidth } from "../../utils/responsive";

export default StyleSheet.create({
  productCounterContainer: {
    alignItems: "center",
  },
  productCounter: {
    flex: 1,
    borderRadius: calcWidth(4),
    marginHorizontal: Spaces.Small,
    paddingVertical: Spaces.Medium,
    backgroundColor: Colors.CounterBG,
  },
  productCounterText: {
    fontFamily: Fonts.Regular,
    fontSize: FontSizes.Medium,
    textAlign: "center",
    color: Colors.CounterText,
  },
});
