import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { fetchProductsByIds } from "../../redux/cart";
import { CategoryProduct, CartPropsTypes } from "../../interfaces";
import { RootStateType } from "../../types";
import CustomFlatList from "../../components/CustomFlatList";
import Screen from "../Screen";
import CartItem from "../../components/CartItem";
import baseStyles from "../../Theme";
import useStyles from "../../hooks/styles/useStyles";

export default function Cart(props: CartPropsTypes) {
  const styles = useStyles(baseStyles);
  const dispatch = useDispatch();
  var { products, loading, error } = useSelector((state: RootStateType) => ({
    products: state.cart.products,
    loading: state.cart.loading,
    error: state.cart.error,
  }));

  useEffect(() => {
    var ids = Object.keys(products).map(Number);
    if (ids.length > 0) {
      dispatch(fetchProductsByIds(ids));
    }
  }, []);

  function renderCartProduct({ item }: { item: CategoryProduct }) {
    return <CartItem product={item} />;
  }
  var extractedProducts = Object.values(products);

  return (
    <Screen withCart={false} scrollable={false}>
      <Loader loading={loading} error={error}>
        {extractedProducts.length == 0 ? (
          <View style={styles.centerContainer}>
            <Text style={styles.text}>No Items</Text>
          </View>
        ) : (
          <CustomFlatList
            data={extractedProducts}
            renderItem={renderCartProduct}
          />
        )}
      </Loader>
    </Screen>
  );
}
