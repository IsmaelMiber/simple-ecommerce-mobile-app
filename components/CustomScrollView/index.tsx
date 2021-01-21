import React from "react";
import { ScrollView, RefreshControl, RefreshControlProps } from "react-native";
import { CustomScrollViewProps } from "../../interfaces";

export default function CustomScrollView(props: CustomScrollViewProps) {
  var { children, pullConfig, ...resetProps } = props;
  if (pullConfig) {
    var { onRefresh, loading } = pullConfig;
    return (
      <ScrollView
        contentContainerStyle={{ flexShrink: 0 }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl enabled refreshing={loading} onRefresh={onRefresh} />
        }
        {...resetProps}
      >
        {children}
      </ScrollView>
    );
  } else {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...resetProps}
      >
        {children}
      </ScrollView>
    );
  }
}
