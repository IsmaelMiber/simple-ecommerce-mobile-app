import React, { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import useDirection from "../../hooks/styles/useDirection";

export default function Row({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<any>;
}) {
  const direction = useDirection();
  var styles = [{ flexDirection: direction == "LTR" ? "row" : "row-reverse" }];
  if (Array.isArray(style)) {
    styles = styles.concat(style);
  } else {
    if (style) {
      styles.push(style);
    }
  }
  return <View style={styles}>{children}</View>;
}
