import React from "react";
import BackBtn from "../BackBtn";
import CartBtn from "../CartBtn";
import Row from "../Row";
import { View } from "react-native";
import topBarStyles from "./styles";
import baseStyles from "../../Theme/index";
import useStyles from "../../hooks/styles/useStyles";

export default function TopBar({ widthCart = true, withBack = true }) {
  const styles = useStyles(topBarStyles, baseStyles);
  return (
    <Row style={[styles.topBarContainer, styles.spaceBetweenCenter]}>
      {withBack ? <BackBtn /> : <View />}

      {widthCart ? <CartBtn /> : <View />}
    </Row>
  );
}
