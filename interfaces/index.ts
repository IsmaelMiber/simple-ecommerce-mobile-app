import { ScreenNavProps, Coords } from "../types";
import * as Location from "expo-location";

export type CategoryRenderItemProps = {
  item: string;
  index: number;
};

export interface CategoryProductRenderItemProps {
  item: CategoryProduct;
  index: number;
}

export interface Loading {
  loading: boolean;
  requestId: number | undefined;
  error: string;
}

export interface CategoriesState extends Loading {
  categories: string[];
}

export interface CategoryProduct {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
  count?: number;
}

export interface CategoryProducts extends Loading {
  catProducts: CategoryProduct[];

  moreLoading: boolean;
  moreRequestId: number | undefined;
  moreError: string;
}

export type CartProducts = { [id: string]: CategoryProduct };

export interface CarState extends Loading {
  products: CartProducts;
  count: number;
}

export interface Address {
  id?: number;
  name: string | null;
  subregion: string | null;
  country: string | null;
  street: string | null;
  region: string | null;
}

export interface Addresses {
  addresses: LocationType[];
}

export interface ProductSliceInitialState extends Loading {
  product: CategoryProduct | null;
}

export interface Connection {
  isToggled: boolean;
}

export interface CustomScrollViewProps {
  children?: React.ReactNode;
  pullConfig?: {
    loading: boolean;
    onRefresh: VoidFunction;
  };
}

export interface CartPropsTypes extends ScreenNavProps {}

export interface LocationType extends Address, Coords {}
