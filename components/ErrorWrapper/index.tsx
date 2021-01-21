import React from "react";
import { View, Text } from "react-native";
import { Error } from "../../types";
import baseStyles from "../../Theme";
import useStyles from "../../hooks/styles/useStyles";

export default function ErrorWrapper(props: { error: Error }) {
  const styles = useStyles(baseStyles);
  var { error } = props;
  var message = "";
  if (error == "Rejected") {
    message = "Please, check your connection";
  }
  return (
    <View>
      <Text style={[styles.text, styles.errorText]}>{message}</Text>
    </View>
  );
}
