import React from "react";
import { ActivityIndicator } from "react-native";
import { Colors } from "../../Theme/Colors";
import ErrorWrapper from "../ErrorWrapper";
import { calcWidth } from "../../utils/responsive";

type LoaderProps = {
  loading: boolean;
  children?: JSX.Element | null;
  error?: string;
};

function Loader(props: LoaderProps) {
  var { loading, error, children } = props;
  if (loading) {
    return <ActivityIndicator size={calcWidth(30)} color={Colors.Primary} />;
  }

  if (error && error.length > 0) {
    return <ErrorWrapper error={error} />;
  }
  return children || null;
}

export default Loader;
