import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const AddCircle = () => {
  return (
    <View style={styles.addCircle}>
      <Image
        style={styles.vuesaxoutlineaddCircleIcon}
        resizeMode="cover"
        source={require("../assets/property-1outline.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vuesaxoutlineaddCircleIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  addCircle: {
    width: 24,
    height: 24,
  },
});

export default AddCircle;
