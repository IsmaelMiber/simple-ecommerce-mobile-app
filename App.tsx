import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { askForNotificationsPermission } from "./utils/permissions";
import { Provider } from "react-redux";
import store from "./redux/store";
import Setup from "./Setup";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as Location from "expo-location";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  const isFontsLoaded = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  useEffect(() => {
    askForNotificationsPermission();
    Location.setGoogleApiKey("AIzaSyDAIYIW1CA-bvpjBc5qkzMoXz6mZQUNE9E");
  }, []);

  if (!isLoadingComplete && isFontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <RootSiblingParent>
            <Setup />
          </RootSiblingParent>
        </Provider>
      </SafeAreaView>
    );
  }
}
