import { useState, useEffect } from "react";
import { calcHeight, calcWidth } from "../../utils/responsive";
import useDirection from "./useDirection";

function isMatchLeft(str: string) {
  if (str) {
    if (str.match(/Left+/)) {
      return true;
    }
  }
  return false;
}

function isMatchRight(str: string) {
  if (str) {
    if (str.match(/Right+/)) {
      return true;
    }
  }
  return false;
}

const styleTypesThatCalcBasedOnWidth = [
  "margin",
  "marginHorizontal",
  "marginRight",
  "marginLeft",
  "padding",
  "paddingHorizontal",
  "paddingRight",
  "paddingLeft",
  "left",
  "right",
  "borderRadius",
  "borderWidth",
  "fontSize",
];

const styleTypesThatCalcBasedOnHeight = [
  "paddingTop",
  "paddingBottom",
  "marginTop",
  "marginBottom",
  "bottom",
  "top",
];

function getResponsiveValue(key, value) {
  if (styleTypesThatCalcBasedOnHeight.includes(key)) {
    return calcHeight(value);
  } else if (styleTypesThatCalcBasedOnWidth.includes(key)) {
    return calcWidth(value);
  }
  return value;
}

function swap(styles, direction) {
  var left = "left";
  var right = "right";
  var Left = "Left";
  var Right = "Right";
  if (direction === "RTL") {
    let newStylesItem = {};
    for (let [styleName, styleValue] of Object.entries(styles)) {
      let newStyles = {};
      for (let [key, value] of Object.entries(styleValue)) {
        let newKey = key;
        let newVal = getResponsiveValue(key, value);

        if (isMatchRight(key)) {
          newKey = key.replace(Right, Left);
        } else {
          if (key.includes(right)) {
            newKey = key.replace(right, left);
          }
        }
        if (isMatchLeft(key)) {
          newKey = key.replace(Left, Right);
        } else {
          if (key.includes(left)) {
            newKey = key.replace(left, right);
          }
        }

        if (typeof value == "string") {
          if (isMatchRight(value)) {
            newVal = value.replace(Right, Left);
          } else {
            if (value.includes(right)) {
              newVal = value.replace(right, left);
            }
          }

          if (isMatchLeft(value)) {
            newVal = value.replace(Left, Right);
          } else {
            if (value.includes(left)) {
              newVal = value.replace(left, right);
            }
          }
        }
        newStyles[newKey] = newVal;
      }
      newStylesItem[styleName] = newStyles;
    }
    return newStylesItem;
  } else {
    let newStylesItem = {};
    for (let [styleName, styleValue] of Object.entries(styles)) {
      let newStyles = {};
      for (let [key, value] of Object.entries(styleValue)) {
        let newKey = key;
        let newVal = getResponsiveValue(key, value);
        newStyles[newKey] = newVal;
      }
      newStylesItem[styleName] = newStyles;
    }
    return newStylesItem;
  }
}

export default function useStyles(...styles) {
  var direction = useDirection();
  var [savedStyles, setSavedStyles] = useState(styles);

  useEffect(() => {
    var concatStyles = Object.assign({}, ...styles);
    var generatedStyles = swap(concatStyles, direction);
    setSavedStyles(generatedStyles);
  }, [direction]);

  return savedStyles;
}
