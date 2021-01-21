import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootStateType } from "../../types";
import OurIcon from "../OurIcon";
import useStyles from "../../hooks/styles/useStyles";
import baseStyles from "../../Theme";
import cartBtnStyles from "./styles";

export default function CartBtn(props: any) {
  const styles = useStyles(cartBtnStyles, baseStyles);
  const navigation = useNavigation();
  const cartProductsCount = useSelector(
    (state: RootStateType) => state.cart.count
  );
  return (
    <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
      {cartProductsCount > 0 ? (
        <View style={[styles.cartProductsCounterTextContainer, styles.center]}>
          <Text style={styles.cartProductsCounterText}>
            {cartProductsCount}
          </Text>
        </View>
      ) : null}
      <OurIcon name="cart-outline" />
    </TouchableOpacity>
  );
}
