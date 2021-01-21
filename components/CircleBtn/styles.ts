import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Spaces } from "../../Theme/Spaces";
import { calcWidth } from "../../utils/responsive";

export default StyleSheet.create({
  btn: { position: "absolute", right: Spaces.Large, bottom: Spaces.Large },
  iconContainer: {
    backgroundColor: Colors.Primary,
    width: calcWidth(56),
    height: calcWidth(56),
    borderRadius: calcWidth(56 / 2),
  },
});
