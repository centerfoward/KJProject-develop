import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FieldForm1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fieldform}>
      <View style={[styles.fieldformChild, styles.iconLayout]} />
      <Text style={styles.searchDestination}>장소를 입력하세요</Text>
      <Pressable
        style={styles.searchNormal}
        onPress={() => navigation.navigate("SerachLocationResult")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/searchnormal.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  fieldformChild: {
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
    color: Color.primaryBlack300,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  searchNormal: {
    left: "87.3%",
    top: "30%",
    right: "6.35%",
    bottom: "30%",
    width: "6.35%",
    height: "40%",
    position: "absolute",
  },
  fieldform: {
    width: 315,
    height: 50,
  },
});

export default FieldForm1;
