import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Fonts, FontSizes } from "../../Theme/Fonts";
import { Spaces } from "../../Theme/Spaces";

export default StyleSheet.create({
  safeArea: {
    backgroundColor: "rgba(0, 0, 0, .8)",
  },
  questionText: {
    color: Colors.Basic,
    fontSize: FontSizes.Medium,
    marginBottom: Spaces.Medium,
  },
  modalBtnsContainer: {
    justifyContent: "space-evenly",
  },
  btn: {
    padding: Spaces.Medium,
  },
  btnText: {
    fontFamily: Fonts.Bold,
    fontSize: FontSizes.Medium,
    textAlign: "center",
  },
  deleteBtnText: {
    color: Colors.Danger,
  },
  cancelBtnText: {
    color: Colors.Basic,
  },
  addressCard: {
    backgroundColor: Colors.Basic,
    borderRadius: 15,
    padding: Spaces.Medium,
    marginBottom: Spaces.Large,
  },
});
