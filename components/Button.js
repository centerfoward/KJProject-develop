import React from "react";
import { StyleSheet, View, Pressable, Text} from "react-native";
import { TouchableOpacity } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";
const ButtonCustom = ({ onPress, text, pressed, line}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={ styles.askLayout }
    >
      <Text style={[styles.askChild, styles.button]}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  askLayout: {
    height: 52,
    width: 360,
  },
  askChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderWidth: 1,
    position: "absolute",
  },
  button: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.oNEMobileOTF,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
});
export default ButtonCustom;