import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "../../redux/categories/getCats";
import { RootStateType } from "../../types";

export default function useGetCategories() {
  const dispatch = useDispatch();

  const { categories, categoriesLoading, categoriesError } = useSelector(
    (state: RootStateType) => ({
      categories: state.categories.categories,
      categoriesLoading: state.categories.loading,
      categoriesError: state.categories.error,
    })
  );

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return { categories, categoriesLoading, categoriesError };
}
