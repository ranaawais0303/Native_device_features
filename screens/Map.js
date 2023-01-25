import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
function Map(props) {
  const [selectedLocation, setSelectedLocation] = useState();
  const region = {
    latitute: 37.78,
    longitude: -122.43,
    latituteDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  function selectLocationHandler(e) {
    // console.log(e.nativeEvent.coordinate.latitude);
    const lat = e.nativeEvent.coordinate.latitude;
    const lng = e.nativeEvent.coordinate.longitude;
    setSelectedLocation({ lat: lat, lng: lng });
    console.log("..........", lat, ".........................");
  }
  return (
    <MapView style={styles.map} region={region} onPress={selectLocationHandler}>
      {selectedLocation && (
        <Marker
          title="Picked location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}

export default Map;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
