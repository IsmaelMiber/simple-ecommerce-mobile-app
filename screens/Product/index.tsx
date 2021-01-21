import React, { useEffect, useState } from "react";
import { Text, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Screen from "../Screen";
import { fetchProductById } from "../../redux/products/getProduct";
import Loader from "../../components/Loader";
import AddCartBtn from "../../components/AddCartBtn";
import { RootStateType, ScreenNavProps, ScreenRouteProp } from "../../types";
import baseStyles from "../../Theme";
import productStyles from "./styles";
import useStyles from "../../hooks/styles/useStyles";
import OurImage from "../../components/OurImage";

export default function ProductScreen(props: ScreenNavProps) {
  const dispatch = useDispatch();
  const styles = useStyles(productStyles, baseStyles);
  var {
    route: { params },
  } = props;

  var id = params?.id;

  var { product, loading, error } = useSelector((state: RootStateType) => ({
    product: state.product.product,
    loading: state.product.loading,
    error: state.product.error,
  }));

  function getProductDetails(id?: number) {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  function renderProductDetails() {
    if (!product) {
      return <Text>Product Not found</Text>;
    }
    var { title, description, price, image } = product;
    return (
      <View>
        <OurImage src={image} style={styles.productImage} />

        <Text style={[styles.text, styles.productTitle]}>{title}</Text>
        <Text style={[styles.text, styles.productDescription]}>
          {description}
        </Text>
        <Text>
          <Text style={[styles.text, styles.productPriceLabel]}>Price: </Text>
          <Text style={[styles.text, styles.productPrice]}>{price} EGP</Text>
        </Text>
      </View>
    );
  }

  return (
    <Screen
      pullConfig={{
        loading,
        onRefresh: () => getProductDetails(id),
      }}
      flyContent={() => (product ? <AddCartBtn product={product} /> : null)}
    >
      <Loader loading={loading} error={error}>
        {renderProductDetails()}
      </Loader>
    </Screen>
  );
}
