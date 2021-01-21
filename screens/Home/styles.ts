import { Platform, StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Spaces } from "../../Theme/Spaces";
import { calcHeight, calcWidth } from "../../utils/responsive";

const styles = StyleSheet.create({
  bottomLoaderSafeArea: {
    marginTop: Spaces.Large,
    marginBottom: Platform.select({
      ios: calcHeight(50) + getBottomSpace(),
      android: calcHeight(110),
    }),
  },
  categoryContainer: {
    paddingHorizontal: Spaces.Medium,
    paddingVertical: Spaces.Small,
    borderRadius: 100,
    backgroundColor: "#fff",
    marginHorizontal: Spaces.Small,
  },
});

export default styles;
