import React from "react";
import { TouchableOpacity, Text, StyleProp } from "react-native";
import useStyles from "../../hooks/styles/useStyles";
import baseStyles from "../../Theme";
import primaryBtnStyles from "./styles";

type Props = {
  onPress: VoidFunction;
  text: string;
  style?: StyleProp<object | []>;
  disable?: boolean;
};

export default function PrimaryBtn(props: Props) {
  const styles = useStyles(primaryBtnStyles, baseStyles);
  var { onPress, text, style, disable = false } = props;
  return (
    <TouchableOpacity
      style={[styles.btn, styles.center, style]}
      onPress={onPress}
      disabled={disable}
    >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}
