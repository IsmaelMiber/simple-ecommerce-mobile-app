import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import OurIcon from "../OurIcon";
import useStyles from "../../hooks/styles/useStyles";
import baseStyles from "../../Theme";
import circleBtnStyles from "./styles";

type Props = {
  onPress: VoidFunction;
  icon: {
    name: string;
    size: number;
    color: string;
  };
  iconContainer?: ViewStyle;
  btn?: ViewStyle;
};

export default function CircleBtn(props: Props) {
  const styles = useStyles(baseStyles, circleBtnStyles);
  var { onPress, icon, iconContainer, btn } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, btn]}>
      <View style={[styles.center, styles.iconContainer, iconContainer]}>
        {icon ? <OurIcon {...icon} /> : null}
      </View>
    </TouchableOpacity>
  );
}
