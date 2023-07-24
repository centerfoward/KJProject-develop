import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SerachLocation1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serachlocation}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={styles.signuptoolbarIcon}
        resizeMode="cover"
        source={require("../assets/signuptoolbar.png")}
      />
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/1.png")}
      />
      <View style={styles.logotext}>
        <Text style={[styles.oott, styles.oottFlexBox]}>OOTT</Text>
        <Text style={[styles.outfitOfThe, styles.oottFlexBox]}>
          Outfit OF the Travel
        </Text>
      </View>
      <Pressable
        style={[styles.nextbutton, styles.textLayout]}
        onPress={() => navigation.navigate("ChooseStyleCoordiSetting")}
      >
        <Image
          style={styles.nextbuttonChild}
          resizeMode="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>다음</Text>
      </Pressable>
      <Text style={[styles.text1, styles.textTypo]}>어디를 가나요?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: 0,
    left: 0,
  },
  oottFlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  textLayout: {
    height: 52,
    width: 360,
    left: 0,
  },
  textTypo: {
    fontSize: FontSize.size_5xl,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  vectorIcon: {
    height: "30%",
    width: "53.34%",
    top: "31.25%",
    right: "-663.34%",
    bottom: "38.75%",
    left: "710%",
    maxHeight: "100%",
  },
  signuptoolbarIcon: {
    top: 32,
    height: 54,
    width: 360,
    left: 0,
    position: "absolute",
  },
  icon: {
    right: 0,
    height: 40,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  oott: {
    fontSize: FontSize.size_13xl,
    color: Color.white,
    height: 38,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
    width: 101,
    top: 0,
    left: 0,
  },
  outfitOfThe: {
    top: 27,
    left: 7,
    fontSize: FontSize.size_5xs,
    color: Color.mediumslateblue_200,
    width: 87,
    height: 23,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
  },
  logotext: {
    top: 31,
    left: 129,
    height: 50,
    width: 101,
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
    fontWeight: "700",
    fontFamily: FontFamily.oNEMobileOTF,
    color: Color.darkblue_100,
    height: 52,
    width: 360,
    left: 0,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    top: 0,
  },
  nextbutton: {
    top: 554,
    position: "absolute",
    height: 52,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text1: {
    height: "6.25%",
    width: "43.33%",
    top: "13.44%",
    left: "28.33%",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.gray_100,
    textAlign: "left",
  },
  serachlocation: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default SerachLocation1;
