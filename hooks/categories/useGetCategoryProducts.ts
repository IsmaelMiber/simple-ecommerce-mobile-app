import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCatProducts,
  fetchMoreCatProducts,
} from "../../redux/categories/getCatProducts";
import { RootStateType } from "../../types";

export default function useGetCategories() {
  const dispatch = useDispatch();

  const {
    catProducts,
    catProductsLoading,
    catProductsError,

    moreCatProductsLoading,
    moreCatProductsError,
  } = useSelector((state: RootStateType) => ({
    catProducts: state.catProducts.catProducts,
    catProductsLoading: state.catProducts.loading,
    catProductsError: state.catProducts.error,

    moreCatProductsLoading: state.catProducts.moreLoading,
    moreCatProductsError: state.catProducts.moreError,
  }));

  const [category, setCategory] = useState("");

  useEffect(() => {
    if (category) {
      let abort = dispatch(fetchCatProducts(category));
      return () => abort.abort();
    }
  }, [category]);

  function getMore() {
    dispatch(fetchMoreCatProducts(category));
  }

  return {
    catProducts,
    catProductsLoading,
    catProductsError,
    category,
    setCategory,

    getMore,
    moreCatProductsLoading,
    moreCatProductsError,
  };
}
