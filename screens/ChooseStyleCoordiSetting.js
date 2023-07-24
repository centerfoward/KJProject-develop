import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const ChooseStyleCoordiSetting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.choosestylecoordisetting}>
      <View style={[styles.choosecordination, styles.nextbuttonParentPosition]}>
        <View style={styles.nextbuttonParentPosition}>
          <View style={styles.nextbutton}>
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
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/11.png")}
          />
        </View>
        <View style={[styles.signuptoolbar, styles.signuptoolbarLayout]}>
          <View
            style={[styles.signuptoolbarChild, styles.signuptoolbarLayout]}
          />
          <Text style={[styles.text1, styles.textTypo]}>회원가입</Text>
          <Pressable
            style={styles.epback}
            onPress={() => navigation.navigate("Settings")}
          >
            <Image
              style={[styles.icon2, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/epback.png")}
            />
          </Pressable>
        </View>
        <Text
          style={[styles.text2, styles.textTypo]}
        >{`가장 **님의 스타일인 코디를 선택해주세요 ! `}</Text>
        <View style={styles.signuppictures}>
          <Image
            style={[
              styles.signuppicturesChild,
              styles.signuppicturesChildLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-5.png")}
          />
          <Image
            style={[
              styles.signuppicturesItem,
              styles.signuppicturesChildLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-6.png")}
          />
          <Image
            style={styles.signuppicturesInner}
            resizeMode="cover"
            source={require("../assets/rectangle-7.png")}
          />
          <Image
            style={[styles.rectangleIcon, styles.rectangleIconPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-9.png")}
          />
          <Image
            style={[styles.signuppicturesChild1, styles.rectangleIconPosition]}
            resizeMode="cover"
            source={require("../assets/rectangle-10.png")}
          />
          <Image
            style={[
              styles.signuppicturesChild2,
              styles.signuppicturesChildLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle-8.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextbuttonParentPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 640,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  signuptoolbarLayout: {
    height: 54,
    width: 360,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    color: Color.gray_100,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  signuppicturesChildLayout: {
    height: 111,
    width: 114,
    position: "absolute",
  },
  rectangleIconPosition: {
    top: 250,
    height: 111,
    width: 114,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_xl,
  },
  wrapper: {
    left: 1,
    top: 2,
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  signuptoolbarChild: {
    top: 0,
  },
  text1: {
    top: 9,
    left: 105,
    width: 138,
    height: 30,
    fontSize: FontSize.size_5xl,
    color: Color.gray_100,
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
    left: 0,
    position: "absolute",
  },
  signuptoolbar: {
    top: 32,
  },
  text2: {
    height: "7.66%",
    width: "83.33%",
    top: "11.56%",
    left: "8.33%",
    fontSize: FontSize.size_base,
  },
  signuppicturesChild: {
    left: 0,
    top: 0,
  },
  signuppicturesItem: {
    left: 129,
    top: 0,
  },
  signuppicturesInner: {
    top: 124,
    left: -5,
    width: 124,
    height: 121,
    position: "absolute",
  },
  rectangleIcon: {
    left: 0,
  },
  signuppicturesChild1: {
    left: 129,
  },
  signuppicturesChild2: {
    top: 129,
    left: 129,
  },
  signuppictures: {
    top: 144,
    left: 52,
    width: 243,
    height: 361,
    position: "absolute",
  },
  choosecordination: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  choosestylecoordisetting: {
    flex: 1,
    height: 640,
    width: "100%",
  },
});

export default ChooseStyleCoordiSetting;
