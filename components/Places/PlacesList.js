import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import PlaceItem from "./PlaceItem";

function PlacesList({ places }) {
  if (!places || places.length === 0) {
    <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}>
        No Places added yet - Start adding some!
      </Text>
    </View>;
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({}) => <PlaceItem okace={item} />}
    />
  );
}

export default PlacesList;
const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
  },
});
