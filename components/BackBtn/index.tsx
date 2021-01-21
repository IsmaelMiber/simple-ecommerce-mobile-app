import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import OurIcon from "../OurIcon";

export default function BackBtn() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <OurIcon name="arrow-back-outline" />
    </TouchableOpacity>
  );
}
