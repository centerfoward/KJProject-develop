import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FieldForm = () => {
  return (
    <View style={styles.fieldform}>
      <View style={styles.fieldformChild} />
      <Text style={styles.searchDestination}>해운대</Text>
      <Image
        style={styles.searchNormalIcon}
        resizeMode="cover"
        source={require("../assets/searchnormal.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldformChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.primaryBlack10,
    position: "absolute",
  },
  searchDestination: {
    height: "48%",
    width: "37.78%",
    top: "26%",
    left: "6.35%",
    fontSize: FontSize.bodytext200_size,
    letterSpacing: 0.1,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.oNEMobileOTF,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  searchNormalIcon: {
    height: "40%",
    width: "6.35%",
    top: "30%",
    right: "6.35%",
    bottom: "30%",
    left: "87.3%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  fieldform: {
    width: 315,
    height: 50,
  },
});

export default FieldForm;
