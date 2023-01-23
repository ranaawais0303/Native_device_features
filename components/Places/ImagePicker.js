import React, { useState } from "react";
import { Text, Button, View, Image, StyleSheet } from "react-native";
import {
  launchCameraAsync,
  // useCameraPermissions,
  // PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/colors";

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();
  // const [cameraPermissionInformation, requestPermission] =
  //   useCameraPermissions();

  //For IOS
  // async function verifyPermission() {
  //   if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
  //     const permissionResponse = await requestPermission();

  //     return permissionResponse.granted;
  //   }
  //   if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
  //     Alert.alert(
  //       "Insufficient Permissions!",
  //       "Your need to grant camera permission to use this app"
  //     );
  //     return false;
  //   }
  //   return true;
  // }
  async function takeImageHandler() {
    //For ios
    // const hasPermission = await verifyPermission();
    // if (!hasPermission) {
    //   return;
    // }
    /////////////////////
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri);
  }
  let imagePreview = <Text>No image taken yet</Text>;
  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
