import React, { useState } from "react";
import { View, Text, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { LocationType } from "../../interfaces";
import Row from "../Row";
import OurIcon from "../OurIcon";
import locationDetailsStyles from "./styles";
import baseStyles from "../../Theme";
import useStyles from "../../hooks/styles/useStyles";

type Props = {
  withDelBtn?: Boolean;
  location: LocationType | null;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
};

export function LocationDetails(props: Props) {
  const styles = useStyles(baseStyles, locationDetailsStyles);
  var { location, withDelBtn, setToggleModal, setId } = props;
  if (!location) {
    return null;
  }
  var { id, name, street, subregion, region, country } = location;
  var details = [name, street, subregion, region, country];
  details = details.filter(Boolean);
  if (details.length == 0) {
    return null;
  }

  return (
    <Row style={[styles.addressCard, styles.spaceBetweenCenter]}>
      <Text style={styles.text}>{details.join(", ")}</Text>

      {withDelBtn ? (
        <TouchableOpacity
          onPress={() => {
            setToggleModal(true);
            setId(id);
          }}
        >
          <OurIcon name="trash-outline" />
        </TouchableOpacity>
      ) : null}
    </Row>
  );
}
