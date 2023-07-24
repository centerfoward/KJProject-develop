import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const PictureOfClosetSetting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pictureofclosetsetting}>
      <View style={styles.image8Parent}>
        <Image
          style={styles.image8Icon}
          resizeMode="cover"
          source={require("../assets/image-8.png")}
        />
        <View style={styles.vectorParent}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("MainPage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-39.png")}
            />
          </Pressable>
          <Text style={styles.text}>완료</Text>
        </View>
        <Image
          style={[styles.icon1, styles.icon1Position]}
          resizeMode="cover"
          source={require("../assets/11.png")}
        />
      </View>
      <View style={[styles.signuptoolbar, styles.signuptoolbarLayout]}>
        <View style={[styles.signuptoolbarChild, styles.signuptoolbarLayout]} />
        <Text style={[styles.text1, styles.textTypo]}>회원가입</Text>
        <Pressable
          style={[styles.epback, styles.icon1Position]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/epback.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.text2, styles.textTypo]}>옷장 찍기</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  icon1Position: {
    left: 0,
    position: "absolute",
  },
  signuptoolbarLayout: {
    height: 54,
    width: 360,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  image8Icon: {
    top: 205,
    left: 31,
    width: 303,
    height: 231,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_xl,
  },
  wrapper: {
    left: 6,
    top: 1,
    width: 358,
    height: 58,
    position: "absolute",
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.oNEMobileOTF,
    color: Color.darkblue_100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    height: 52,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorParent: {
    top: 543,
    height: 52,
    width: 360,
    left: 0,
    position: "absolute",
  },
  icon1: {
    right: 0,
    maxWidth: "100%",
    height: 40,
    overflow: "hidden",
    top: 0,
  },
  image8Parent: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 640,
  },
  signuptoolbarChild: {
    top: 0,
  },
  text1: {
    top: 9,
    left: 105,
    color: Color.gray_400,
    width: 138,
    height: 30,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  icon2: {
    overflow: "hidden",
  },
  epback: {
    top: 12,
    width: 24,
    height: 24,
  },
  signuptoolbar: {
    top: 36,
  },
  text2: {
    height: "6.25%",
    width: "43.89%",
    top: "12.97%",
    left: "26.39%",
    fontSize: FontSize.size_13xl,
    color: Color.gray_100,
  },
  pictureofclosetsetting: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    height: 640,
    width: "100%",
  },
});

export default PictureOfClosetSetting;
