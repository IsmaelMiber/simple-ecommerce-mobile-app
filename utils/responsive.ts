/* 
  Responsive Functions that make writing responsive ease.
  by sending the pt value of distance and it will make all calculation for you.

  They are 3 Functions:
   1- calcHeight for calc any distance depend on height.
   2- calcWidth for calc any distance depend on width.
   3- calcFont for calc fontSize it is the same apporach of calcWidth.
*/
import { Dimensions, PixelRatio } from "react-native";

const WIDTH = 357; //iPhone 11 Pro, X, Xs.
const HEIGHT = 812; //iPhone 11 Pro, X, Xs.
const RESPONSIVE = {
  calcHeight,
  calcWidth,
  calcFont,
};

function calcHeight(size: number) {
  var { height } = Dimensions.get("window");
  var percentage = (size / HEIGHT) * 100;
  var calculations = (percentage * height) / 100;
  return PixelRatio.roundToNearestPixel(calculations);
}

function calcWidth(size: number) {
  var { width } = Dimensions.get("window");
  var percentage = (size / WIDTH) * 100;
  var calculations = (percentage * width) / 100;
  return PixelRatio.roundToNearestPixel(calculations);
}

function calcFont(size: number) {
  return calcWidth(size);
}

export default RESPONSIVE;
export { calcHeight, calcWidth, calcFont };
