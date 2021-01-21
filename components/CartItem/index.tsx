import React from "react";
import { CategoryProduct } from "../../interfaces";
import { View, Text, Touchable } from "react-native";
import OurImage from "../OurImage";
import Row from "../Row";
import OurIcon from "../OurIcon";
import AddCartBtn from "../AddCartBtn";
import { TouchableOpacity } from "react-native-gesture-handler";
import cartSlice from "../../redux/cart";
import { useDispatch } from "react-redux";
import useStyles from "../../hooks/styles/useStyles";
import cartItemStyles from "./styles";

export default function CartItem(props: { product: CategoryProduct }) {
  const styles = useStyles(cartItemStyles);
  const dispatch = useDispatch();
  var { product } = props;
  var { image, title, count, price, id } = product;
  if (count) {
    price *= count;
  }
  return (
    <View style={styles.cartItemContainer}>
      <Row style={styles.cartItemDetails}>
        <View style={styles.cartItemImgContainer}>
          <OurImage src={image} style={styles.cartItemImage} />
        </View>
        <Text style={styles.cartItemTitle}>{title}</Text>
        <TouchableOpacity
          onPress={() => dispatch(cartSlice.actions.deleteFromCart(id))}
        >
          <OurIcon name="trash-outline" />
        </TouchableOpacity>
      </Row>
      <AddCartBtn product={product} />
    </View>
  );
}
