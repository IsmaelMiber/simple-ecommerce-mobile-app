import { Alert, Linking } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

export async function getPermissionStatus(type: Permissions.PermissionType) {
  var response = await Permissions.getAsync(type);
  return response;
}

export async function getLocationPermissionStatus() {
  return getPermissionStatus(Permissions.LOCATION);
}

export async function askForPermission(type: Permissions.PermissionType) {
  var response = await Permissions.askAsync(type);
  return response;
}

export async function askForLocationPermission(
  onSuccess: Function,
  onFail?: Function
) {
  var isGranted = await getLocationPermissionStatus();
  
  if (isGranted.status == "granted") {
    onSuccess && onSuccess();
    return true;
  }
  var response = await askForPermission(Permissions.LOCATION);
  if (response) {
    if (response.status == "granted") {
      onSuccess(true);
    } else {
      onFail && onFail();
      let buttons = [];
      if (response.canAskAgain) {
        buttons.push({
          text: "Ask Again",
          onPress: () => askForLocationPermission(onSuccess, onFail),
        });
      } else {
        buttons.push({
          text: "Go to settings",
          onPress: () => Linking.openSettings(),
        });
      }
      Alert.alert(
        "Location Permission",
        "We can't access location cause you denied permession access, please allow it for getting your location",
        buttons
      );
    }
  }
}

export async function askForNotificationsPermission() {
  var { granted } = await Notifications.getPermissionsAsync();
  if (!granted) {
    Notifications.requestPermissionsAsync({
      // Android object not needed cause its properties values are true by default
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowDisplayInCarPlay: true,
        allowCriticalAlerts: true,
        provideAppNotificationSettings: true,
        allowProvisional: true,
        allowAnnouncements: true,
      },
    });
  }
}
