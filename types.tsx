import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import store from "./redux/store";
import { CategoryProduct } from "./interfaces";

export type Screens = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  Home: undefined;
  Profile: undefined;
  Root: undefined;
  NotFound: undefined;
  ProductScreen: { id: number };
  CartScreen: undefined;
  AddressesScreen: undefined;
  MapScreen: undefined;
};

export type ScreenNavProp = StackNavigationProp<
  Screens,
  | "HomeScreen"
  | "ProfileScreen"
  | "Home"
  | "Profile"
  | "Root"
  | "NotFound"
  | "ProductScreen"
  | "CartScreen"
  | "AddressesScreen"
  | "MapScreen"
>;

export type ScreenRouteProp = RouteProp<
  Screens,
  | "HomeScreen"
  | "ProfileScreen"
  | "Home"
  | "Profile"
  | "Root"
  | "NotFound"
  | "ProductScreen"
  | "CartScreen"
  | "AddressesScreen"
  | "MapScreen"
>;

export type ScreenNavProps = {
  navigation: ScreenNavProp;
  route: ScreenRouteProp;
};

export type RootStateType = ReturnType<typeof store.getState>;

export type Category = string;

export type ProductCardProps = {
  product: CategoryProduct;
};

export type Error = string;

export type Coords = {
  latitude: number;
  longitude: number;
};

export type Localization = {
  direction: string;
};
