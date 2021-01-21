import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useDirection from "../hooks/styles/useDirection";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { FontSizes } from "../Theme/Fonts";
import { Screens } from "../types";
import { calcFont } from "../utils/responsive";

const BottomTab = createBottomTabNavigator<Screens>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const direction = useDirection();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        tabStyle: {
          justifyContent: "center",
        },
        labelStyle: {
          fontSize: calcFont(FontSizes.Small),
        },
      }}
    >
      {direction === "LTR" ? (
        <>
          <BottomTab.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{
              tabBarAccessibilityLabel: "Home Tab",
            }}
          />
          <BottomTab.Screen
            name="Profile"
            component={ProfileStackNavigator}
            options={{
              tabBarAccessibilityLabel: "Profile Tab",
            }}
          />
        </>
      ) : (
        <>
          <BottomTab.Screen
            name="Profile"
            component={ProfileStackNavigator}
            options={{
              tabBarAccessibilityLabel: "Profile Tab",
            }}
          />
          <BottomTab.Screen
            name="Home"
            component={HomeStackNavigator}
            options={{
              tabBarAccessibilityLabel: "Home Tab",
            }}
          />
        </>
      )}
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<Screens>();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<Screens>();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}
