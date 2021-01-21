import Toast from "react-native-root-toast";
import NetInfo from "@react-native-community/netinfo";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import connectionSlice from "../../redux/connection";
import { RootStateType } from "../../types";

export default function useConnection() {
  const dispatch = useDispatch();
  var isConenctionToggled = useSelector(
    (state: RootStateType) => state.connection.isToggled
  );

  var [isConnected, setConnected] = useState(true);

  var toastSettings = {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0,
  };

  var toastSuccessSettings = {
    ...toastSettings,
    backgroundColor: "green",
  };

  var toastErrorSettings = {
    ...toastSettings,
    backgroundColor: "red",
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConnected(state.isConnected);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (isConenctionToggled) {
      Toast.show("connection backed", toastSuccessSettings);
      if (isConnected) {
        Toast.show("connection backed", toastSuccessSettings);
      } else {
        Toast.show("Please, check your connection", toastErrorSettings);
      }
    }
    if (!isConenctionToggled && !isConnected) {
      dispatch(connectionSlice.actions.setConnectionToggled(true));
    }
  }, [isConnected, isConenctionToggled]);

  return [isConenctionToggled];
}
