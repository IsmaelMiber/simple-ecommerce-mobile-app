import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Fonts, FontSizes } from "../../Theme/Fonts";
import { Spaces } from "../../Theme/Spaces";
import { calcHeight } from "../../utils/responsive";

export default StyleSheet.create({
  cartItemContainer: {
    marginBottom: Spaces.Large,
  },
  cartItemDetails: {
    marginBottom: Spaces.Large,
    alignItems: "center",
  },
  cartItemImage: {
    height: calcHeight(50),
  },
  cartItemImgContainer: {
    flex: 1,
    marginRight: Spaces.Small,
  },
  cartItemTitle: {
    flex: 5,
    fontFamily: Fonts.SemiBold,
    fontSize: FontSizes.Small,
    textAlign: "left",
    color: Colors.Secondary,
  },
});
