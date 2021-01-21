import React from "react";
import { Ionicons } from "@expo/vector-icons";
import useDirection from "../../hooks/styles/useDirection";
import { View } from "react-native";
import { calcWidth } from "../../utils/responsive";

type Props = {
  name: string;
  size?: number;
  color?: string;
};

export default function OurIcon(props: Props) {
  const direction = useDirection();
  var { name = "", size = 30, color } = props;
  return (
    <View
      style={{
        transform: [{ rotateY: direction == "LTR" ? "0deg" : "180deg" }],
      }}
    >
      {name ? (
        <Ionicons name={name} size={calcWidth(size)} color={color} />
      ) : null}
    </View>
  );
}
