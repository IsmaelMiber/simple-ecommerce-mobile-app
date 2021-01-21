import React from "react";
import { View } from "react-native";
import CustomScrollView from "../../components/CustomScrollView";
import { CustomScrollViewProps } from "../../interfaces";
import homeStyles from "./styles";
import useStyles from "../../hooks/styles/useStyles";
import TopBar from "../../components/TopBar";

interface ScreenProps extends CustomScrollViewProps {
  flyContent?: Function;
  withBack?: boolean;
  withCart?: boolean;
  scrollable?: boolean;
}

export default function Screen(props: ScreenProps) {
  const styles = useStyles(homeStyles);
  var {
    children,
    pullConfig,
    flyContent,
    withBack,
    withCart,
    scrollable = true,
  } = props;
  return (
    <View style={styles.container}>
      <TopBar withBack={withBack} widthCart={withCart} />
      {!scrollable ? (
        children
      ) : (
        <CustomScrollView pullConfig={pullConfig}>{children}</CustomScrollView>
      )}

      {flyContent ? (
        <View style={styles.flyContentContainer}>{flyContent()}</View>
      ) : null}
    </View>
  );
}
