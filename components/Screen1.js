import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Screen1 = () => {
  return (
    <View style={styles.view}>
      <Image
        style={styles.bgIcon}
        resizeMode="cover"
        source={require("../assets/bg.png")}
      />
      <Image
        style={[styles.rightSideIcon, styles.sideIconPosition]}
        resizeMode="cover"
        source={require("../assets/right-side.png")}
      />
      <Image
        style={[styles.leftSideIcon, styles.sideIconPosition]}
        resizeMode="cover"
        source={require("../assets/left-side.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sideIconPosition: {
    height: 11,
    top: 17,
    position: "absolute",
  },
  bgIcon: {
    top: 0,
    right: 71,
    bottom: 10,
    left: 70,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rightSideIcon: {
    right: 15,
    width: 67,
  },
  leftSideIcon: {
    left: 33,
    width: 28,
  },
  view: {
    width: 360,
    height: 40,
    overflow: "hidden",
  },
});

export default Screen1;
