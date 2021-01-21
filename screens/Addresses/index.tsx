import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";
import CircleBtn from "../../components/CircleBtn";
import CustomFlatList from "../../components/CustomFlatList";
import { LocationDetails } from "../../components/LocationDetails";
import useStyles from "../../hooks/styles/useStyles";
import { LocationType } from "../../interfaces";
import { Colors } from "../../Theme/Colors";
import { RootStateType, ScreenNavProps } from "../../types";
import { calcHeight, calcWidth } from "../../utils/responsive";
import Screen from "../Screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Row from "../../components/Row";
import { useDispatch } from "react-redux";
import addressesSlice from "../../redux/addresses";
import locationDetailsStyles from "../../components/LocationDetails/styles";
import baseStyles from "../../Theme";

export default function Addresses({ navigation }: ScreenNavProps) {
  const dispatch = useDispatch();
  const styles = useStyles(baseStyles, locationDetailsStyles);
  var { addresses } = useSelector((state: RootStateType) => ({
    addresses: state.addresses.addresses,
  }));
  var [toggleModal, setToggleModal] = useState(false);
  var [id, setId] = useState(NaN);

  function handleToggleModal() {
    setToggleModal(!toggleModal);
  }
  return (
    <Screen scrollable={false}>
      {addresses.length > 0 ? (
        <CustomFlatList
          style={{ marginBottom: calcHeight(100) }}
          data={addresses}
          renderItem={({ item }: { item: LocationType }) => (
            <LocationDetails
              setId={setId}
              setToggleModal={setToggleModal}
              location={item}
              withDelBtn
            />
          )}
        />
      ) : (
        <View style={styles.centerContainer}>
          <Text style={styles.text}>No Addresses yet</Text>
        </View>
      )}

      <CircleBtn
        onPress={() => navigation.navigate("MapScreen")}
        icon={{
          name: "add",
          size: calcWidth(35),
          color: Colors.Basic,
        }}
      />

      <Modal
        visible={toggleModal}
        animationType="fade"
        onRequestClose={handleToggleModal}
        transparent
      >
        <SafeAreaView style={[styles.safeArea, styles.centerContainer]}>
          <View>
            <Text style={[styles.text, styles.questionText]}>
              Are you sure to delete this address?
            </Text>
            <Row style={styles.modalBtnsContainer}>
              <TouchableOpacity style={styles.btn} onPress={handleToggleModal}>
                <Text style={[styles.cancelBtnText, styles.btnText]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleToggleModal();
                  dispatch(addressesSlice.actions.deleteAddress(id));
                }}
                style={styles.btn}
              >
                <Text style={[styles.deleteBtnText, styles.btnText]}>
                  Delete
                </Text>
              </TouchableOpacity>
            </Row>
          </View>
        </SafeAreaView>
      </Modal>
    </Screen>
  );
}
