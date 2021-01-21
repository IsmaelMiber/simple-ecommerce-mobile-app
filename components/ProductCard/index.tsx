import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddCartBtn from "../AddCartBtn";
import { ProductCardProps } from "../../types";
import cardStyles from "./styles";
import OurImage from "../OurImage";
import useStyles from "../../hooks/styles/useStyles";
import baseStyles from "../../Theme";

export default function ProductCard(props: ProductCardProps) {
  const navigation = useNavigation();
  const styles = useStyles(cardStyles, baseStyles);
  var { product } = props;
  var { id, image, title, price } = product;

  if (!id || !title || !price) {
    return null;
  }
  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate("ProductScreen", { id })}
    >
      <OurImage src={image} style={styles.productCardImageContainer} />
      <View>
        <Text style={[styles.text, styles.productCardTitle]}>
          {title.slice(0, 30)}...
        </Text>
      </View>
      <Text style={styles.productCardPrice}>{price} EGP</Text>

      <AddCartBtn product={product} />
    </TouchableOpacity>
  );
}
