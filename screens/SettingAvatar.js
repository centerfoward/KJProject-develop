import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const SettingAvatar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingavatar}>
      <View style={styles.parent}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/-20230515--936-1.png")}
        />
        <View style={[styles.nextbutton, styles.textLayout]}>
          <Image
            style={styles.nextbuttonChild}
            resizeMode="cover"
            source={require("../assets/rectangle-39.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>완료</Text>
        </View>
      </View>
      <Text
        style={[styles.text1, styles.textFlexBox]}
      >{`**님의 아바타를 만들어주세요  `}</Text>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/1.png")}
      />
      <Pressable
        style={styles.epback}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/epback.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    height: 52,
    width: 360,
    left: 0,
  },
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    top: 153,
    left: 17,
    width: 326,
    height: 375,
    position: "absolute",
  },
  nextbuttonChild: {
    top: 2,
    left: 1,
    borderRadius: Border.br_xl,
    width: 358,
    height: 58,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.oNEMobileOTF,
    color: Color.darkblue_100,
    height: 52,
    width: 360,
    left: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  nextbutton: {
    top: 544,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
  },
  parent: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 640,
  },
  text1: {
    height: "7.81%",
    width: "83.33%",
    top: "12.34%",
    left: "6.67%",
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.gray_100,
  },
  icon1: {
    right: 0,
    maxWidth: "100%",
    height: 40,
    overflow: "hidden",
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  epback: {
    left: 5,
    top: 40,
    width: 24,
    height: 24,
    position: "absolute",
  },
  settingavatar: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    height: 640,
    width: "100%",
  },
});

export default SettingAvatar;
