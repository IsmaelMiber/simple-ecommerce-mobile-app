import React from "react";
import { FlatList, FlatListProps } from "react-native";
import useDirection from "../../hooks/styles/useDirection";

function CustomFlatList(props: FlatListProps<any>) {
  var { data, renderItem, ...restProps } = props;
  var direction = useDirection();

  return (
    <FlatList
      inverted={restProps.horizontal ? direction === "RTL" : false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      data={data}
      renderItem={renderItem}
      {...restProps}
    />
  );
}

function keyExtractor(item: object, index: number) {
  return `item-${index}`;
}

export default React.memo(CustomFlatList);
