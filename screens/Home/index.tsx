import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import useGetCategoies from "../../hooks/categories/useGetCategories";
import useGetCategoryProducts from "../../hooks/categories/useGetCategoryProducts";
import Screen from "../Screen";
import Loader from "../../components/Loader";
import CustomFlatList from "../../components/CustomFlatList";
import ProductCard from "../../components/ProductCard";
import {
  CategoryProductRenderItemProps,
  CategoryRenderItemProps,
} from "../../interfaces";
import { ScreenNavProps } from "../../types";
import homeStyles from "./styles";
import useStyles from "../../hooks/styles/useStyles";
import { Colors } from "../../Theme/Colors";

export default function Home(props: ScreenNavProps) {
  const styles = useStyles(homeStyles);
  const { categories, categoriesLoading, categoriesError } = useGetCategoies();
  const {
    catProducts,
    catProductsLoading,
    catProductsError,
    category,
    setCategory,

    getMore,
    moreCatProductsLoading,
    moreCatProductsError,
  } = useGetCategoryProducts();

  useEffect(() => {
    if (categories.length > 0 && category == "") {
      let [firstCategory] = categories;
      firstCategory && setCategory(firstCategory);
    }
  }, [categories]);

  function renderCategory({ item }: CategoryRenderItemProps) {
    return (
      <TouchableOpacity
        onPress={() => {
          setCategory(item);
        }}
      >
        <View
          style={[
            styles.categoryContainer,
            {
              borderColor: category == item ? Colors.Primary : Colors.Secondary,
            },
          ]}
        >
          <Text
            style={{
              color: category == item ? Colors.Primary : Colors.Secondary,
            }}
          >
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  function renderCategoryProduct({ item }: CategoryProductRenderItemProps) {
    return <ProductCard product={item} />;
  }
  return (
    <Screen withBack={false} scrollable={false}>
      <View>
        <Loader loading={categoriesLoading} error={categoriesError}>
          <CustomFlatList
            horizontal
            data={categories}
            renderItem={renderCategory}
          />
        </Loader>
      </View>

      <View style={styles.bottomLoaderSafeArea}>
        <Loader
          loading={catProductsLoading || categoriesLoading}
          error={catProductsError}
        >
          <CustomFlatList
            data={catProducts}
            renderItem={renderCategoryProduct}
            onRefresh={() => {
              setCategory(category);
            }}
            refreshing={catProductsLoading}
            onEndReachedThreshold={0.5}
            onEndReached={(info) => {
              getMore();
            }}
            ListFooterComponent={
              <Loader
                loading={moreCatProductsLoading}
                error={moreCatProductsError}
              />
            }
          />
        </Loader>
      </View>
    </Screen>
  );
}
