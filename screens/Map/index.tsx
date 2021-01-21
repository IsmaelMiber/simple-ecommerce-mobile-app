import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import addressesSlice from "../../redux/addresses";
import { useDispatch } from "react-redux";
import { LocationDetails } from "../../components/LocationDetails";
import { ScreenNavProps, Coords } from "../../types";
import { LocationType } from "../../interfaces";
import { askForLocationPermission } from "../../utils/permissions";
import PrimaryBtn from "../../components/PrimaryBtn";
import Screen from "../Screen";
import useStyles from "../../hooks/styles/useStyles";
import mapStyles from "./styles";
import baseStyles from "../../Theme";
import { Colors } from "../../Theme/Colors";
import CircleBtn from "../../components/CircleBtn";
import { calcWidth } from "../../utils/responsive";

const latitudeDelta = 0.001;
const longitudeDelta = 0.001;
export default function Map({ navigation }: ScreenNavProps) {
  const styles = useStyles(mapStyles, baseStyles);
  const dispatch = useDispatch();
  var [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta,
    longitudeDelta,
  });

  // this margin setter to show the locate user location button on android.
  var [mapMargin, setMapMargin] = useState(1);
  var [mapLoading, setMapLoading] = useState(true);
  var [location, setLocation] = useState<LocationType | null>(null);
  var [loadingLocationDetails, setLoadingLocationDetails] = useState(false);
  var ref = useRef();

  async function getCurrentLocationCoords() {
    var { coords } = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    var { latitude, longitude } = coords;
    setRegion({
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    });
    getLocationDetails({ latitude, longitude });
    return coords;
  }

  async function animateToMyLocation() {
    var coords = await getCurrentLocationCoords();
    if (ref?.current?.animateCamera) {
      ref.current.animateCamera({ center: coords });
    }
  }

  async function getLocationDetails(coords: Coords) {
    setLoadingLocationDetails(true);
    var locationDetails = await Location.reverseGeocodeAsync(coords, {
      useGoogleMaps: true,
    });

    if (locationDetails.length > 0) {
      var { name, subregion, country, street, region } = locationDetails[0];
      var location: LocationType = {
        name,
        subregion,
        country,
        street,
        region,
        ...coords,
      };
      setLocation(location);
      setRegion({
        ...coords,
        latitudeDelta,
        longitudeDelta,
      });
      setLoadingLocationDetails(false);
    }
  }

  useEffect(() => {
    askForLocationPermission(getCurrentLocationCoords);
  }, []);
  return (
    <Screen
      scrollable={false}
      withCart={false}
      flyContent={() => (
        <PrimaryBtn
          disable={loadingLocationDetails}
          onPress={() => {
            dispatch(addressesSlice.actions.addAddress(location));
            navigation.goBack();
          }}
          text="Select this location"
        />
      )}
    >
      <View style={[styles.container, styles.center, { margin: mapMargin }]}>
        <MapView
          loadingEnabled
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsMyLocationButton={false}
          style={styles.map}
          region={region}
          onRegionChangeComplete={(reg) => {
            var { latitude, longitude } = reg;
            var { latitude: currentLat, longitude: currentLng } = region;
            if (
              latitude.toFixed(11) != currentLat.toFixed(11) ||
              longitude.toFixed(11) != currentLng.toFixed(11)
            ) {
              setRegion(reg);
              getLocationDetails({
                latitude,
                longitude,
              });
            }
          }}
          onMapReady={() => {
            setMapMargin(0);
            setMapLoading(false);
          }}
          ref={(r) => {
            if (r && ref?.current) {
              ref.current = r;
            }
          }}
        />

        {!mapLoading ? (
          <View
            style={{
              position: "absolute",
              zIndex: 10000,
            }}
          >
            <MaterialCommunityIcons
              name="map-marker"
              size={calcWidth(35)}
              color="#de4229"
            />
          </View>
        ) : null}

        <View style={styles.addressContainer}>
          <LocationDetails location={location} />
        </View>

        <CircleBtn
          onPress={() => askForLocationPermission(animateToMyLocation)}
          icon={{
            name: "locate-outline",
            size: calcWidth(35),
            color: Colors.Secondary,
          }}
          iconContainer={{
            backgroundColor: Colors.CounterBG,
          }}
          btn={{
            bottom: calcWidth(80),
          }}
        />
      </View>
    </Screen>
  );
}
