import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, Switch, Linking } from "react-native";
import { ScreenNavProps } from "../../types";
import localizationSlice from "../../redux/Localization";
import { useDispatch } from "react-redux";
import useDirection from "../../hooks/styles/useDirection";
import Row from "../../components/Row";
import Screen from "../Screen";
import useStyles from "../../hooks/styles/useStyles";
import profileStyles from "./styles";
import baseStyles from "../../Theme/index";
import PrimaryBtn from "../../components/PrimaryBtn";

export default function Profile({ navigation }: ScreenNavProps) {
  const dispatch = useDispatch();
  const direction = useDirection();
  const styles = useStyles(profileStyles, baseStyles);
  return (
    <Screen>
      <Row style={[styles.directionToggler]}>
        <Text style={styles.text}>Toggle RTL</Text>
        <Switch
          value={direction === "RTL"}
          onValueChange={() =>
            dispatch(localizationSlice.actions.toggleDirection())
          }
        />
      </Row>
      <PrimaryBtn
        onPress={() => Linking.openSettings()}
        text="Enable Notifications && Enable Location"
        style={[styles.bottomSpace]}
      />

      <PrimaryBtn
        onPress={() => navigation.navigate("AddressesScreen")}
        text="Go to Addresses"
      />
    </Screen>
  );
}
