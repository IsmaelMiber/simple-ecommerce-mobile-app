import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Fonts } from "../../Theme/Fonts";
import { calcWidth } from "../../utils/responsive";

export default StyleSheet.create({
  cartProductsCounterTextContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 10000,
    width: calcWidth(15),
    height: calcWidth(15),
    borderRadius: calcWidth(15 / 2),
    backgroundColor: Colors.Primary,
  },
  cartProductsCounterText: {
    fontFamily: Fonts.Bold,
    color: Colors.Basic,
    textAlign: "center",
    fontSize: 8,
  },
});
