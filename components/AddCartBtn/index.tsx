import React from "react";
import { TouchableOpacity, Text } from "react-native";
import cartSlice from "../../redux/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../types";
import { CategoryProduct } from "../../interfaces";
import Row from "../Row";
import OurIcon from "../OurIcon";
import PrimaryBtn from "../PrimaryBtn";
import baseStyles from "../../Theme";
import addCartBtnStyles from "./styles";
import useStyles from "../../hooks/styles/useStyles";

type Props = {
  product: CategoryProduct;
};

export default function AddCartBtn(props: Props) {
  const styles = useStyles(addCartBtnStyles, baseStyles);
  const dispatch = useDispatch();

  var { product } = props;

  var { id } = product;
  var { products } = useSelector((state: RootStateType) => ({
    products: state.cart.products,
  }));
  var count = products[id]?.count;

  return !count ? (
    <PrimaryBtn
      onPress={() => {
        dispatch(cartSlice.actions.addToCart(product));
      }}
      text="Add To Cart"
    />
  ) : (
    <Row style={styles.productCounterContainer}>
      <TouchableOpacity
        onPress={() => dispatch(cartSlice.actions.decrementProductCount(id))}
      >
        <OurIcon name="remove-circle-outline" />
      </TouchableOpacity>

      <Row style={[styles.productCounter, styles.center]}>
        <Text style={styles.productCounterText}>{count}</Text>
      </Row>
      <TouchableOpacity
        onPress={() => dispatch(cartSlice.actions.incrementProductCount(id))}
      >
        <OurIcon name="add-circle-outline" />
      </TouchableOpacity>
    </Row>
  );
}
