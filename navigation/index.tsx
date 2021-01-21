import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as Linking from "expo-linking";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { Screens } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import ProductScreen from "../screens/Product";
import CartScreen from "../screens/Cart";
import Addresses from "../screens/Addresses";
import Map from "../screens/Map";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<Screens>();

function RootNavigator() {
  useEffect(() => {
    // Linking.addEventListener(
    //   "exp://192.168.1.5:19000/--/https://fakestoreapi.com/products/1",
    //   (...ars) => {
    //     console.warn(ars);
    //   }
    // );

    Linking.getInitialURL().then((res) => {});
  }, []);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="AddressesScreen" component={Addresses} />
      <Stack.Screen name="MapScreen" component={Map} />
    </Stack.Navigator>
  );
}
