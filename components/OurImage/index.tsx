import React from "react";
import { View, Image, ViewStyle } from "react-native";
import styles from "./styles";

const productImagePlaceholder = require("../../assets/images/product-placeholder.png");

export default function OurImage(props: { src: string; style: ViewStyle }) {
  var { src, style } = props;
  var source = src ? { uri: src } : productImagePlaceholder;
  return (
    <View style={style}>
      <Image
        defaultSource={productImagePlaceholder}
        source={source}
        style={styles.img}
        resizeMode="contain"
      />
    </View>
  );
}
