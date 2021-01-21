import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Fonts, FontSizes } from "../../Theme/Fonts";
import { Spaces } from "../../Theme/Spaces";

export default StyleSheet.create({
  btn: {
    backgroundColor: Colors.Primary,
    borderRadius: Spaces.Small,
    paddingVertical: Spaces.Medium,
  },
  btnText: {
    fontFamily: Fonts.SemiBold,
    fontSize: FontSizes.Medium,
    textAlign: "center",
    color: Colors.Basic,
  },
});
