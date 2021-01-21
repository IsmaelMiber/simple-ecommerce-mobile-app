import { StyleSheet } from "react-native";
import { Colors } from "../../Theme/Colors";
import { Fonts, FontSizes } from "../../Theme/Fonts";
import { Spaces } from "../../Theme/Spaces";
import { calcHeight } from "../../utils/responsive";

export default StyleSheet.create({
  productCardImageContainer: {
    flex: 1,
    width: "100%",
    height: calcHeight(130),
    marginBottom: Spaces.Large,
  },
  productCard: {
    backgroundColor: Colors.Basic,
    borderRadius: Spaces.Medium,
    padding: Spaces.Medium,
    marginBottom: Spaces.Large,
  },
  productCardTitle: {
    fontFamily: Fonts.Bold,
    marginVertical: Spaces.Large,
  },
  productCardPrice: {
    fontFamily: Fonts.SemiBold,
    fontSize: FontSizes.Medium,
    textAlign: "left",
    color: Colors.Price,
    marginBottom: Spaces.Small,
  },
});
