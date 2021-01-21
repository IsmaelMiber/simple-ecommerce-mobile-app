import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Fonts, FontSizes } from "../../Theme/Fonts";
import { Spaces } from "../../Theme/Spaces";
import { calcHeight } from "../../utils/responsive";

export default StyleSheet.create({
  productImage: {
    height: calcHeight(180),
    marginBottom: Spaces.Large,
  },
  productTitle: {
    fontFamily: Fonts.Bold,
    fontSize: FontSizes.Medium,
    color: Colors.Secondary,
    marginBottom: Spaces.Large,
  },
  productDescription: {
    fontFamily: Fonts.Regular,
    fontSize: FontSizes.Small,
    color: Colors.Secondary,
    marginBottom: Spaces.Large,
  },
  productPriceLabel: {
    fontFamily: Fonts.Bold,
    fontSize: FontSizes.Medium,
    color: Colors.Secondary,
  },
  productPrice: {
    fontFamily: Fonts.SemiBold,
    fontSize: FontSizes.Medium,
    color: Colors.Primary,
  },
});
