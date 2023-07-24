import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <Image
        style={[styles.pexelsCottonbroStudio915469Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/pexelscottonbrostudio9154696-1.png")}
      />
      <View style={[styles.view, styles.viewPosition]}>
        <View style={styles.logotext}>
          <Text style={styles.oott}>OOTT</Text>
          <Text style={styles.outfitOfThe}>Outfit OF the Travel</Text>
        </View>
        <Image
          style={[styles.signuptoolbarIcon, styles.viewPosition]}
          resizeMode="cover"
          source={require("../assets/signuptoolbar.png")}
        />
        <Image
          style={[styles.icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/1.png")}
        />
      </View>
      <View style={[styles.parent, styles.groupPosition]}>
        <Text style={[styles.text, styles.textPosition]}> 닉네임</Text>
        <Text style={[styles.text1, styles.textPosition]}> user2</Text>
      </View>
      <View style={[styles.group, styles.groupPosition]}>
        <Text style={[styles.text, styles.textPosition]}>
          {" "}
          선호하는 패션 키워드
        </Text>
        <Text style={[styles.text1, styles.textPosition]}> 와이드 키치</Text>
      </View>
      <View style={[styles.container, styles.groupPosition]}>
        <Text style={[styles.text, styles.textPosition]}> 이름</Text>
        <Text style={[styles.text1, styles.textPosition]}> 홍길동</Text>
      </View>
      <Pressable
        style={[
          styles.friendssettingbutton,
          styles.friendssettingbuttonPosition1,
        ]}
        onPress={() => navigation.navigate("SettingAvatar")}
      >
        <View
          style={[
            styles.friendssettingbuttonChild,
            styles.friendssettingbuttonPosition1,
          ]}
        />
        <Text style={styles.text6}>아바타 설정하기</Text>
      </Pressable>
      <Pressable
        style={[
          styles.friendssettingbutton1,
          styles.friendssettingbuttonPosition1,
        ]}
        onPress={() => navigation.navigate("ChoosePassionKeywordSettings")}
      >
        <View
          style={[
            styles.friendssettingbuttonChild,
            styles.friendssettingbuttonPosition1,
          ]}
        />
        <Text style={styles.text6}>패션 키워드 재설정하기</Text>
      </Pressable>
      <Pressable
        style={[
          styles.friendssettingbutton2,
          styles.friendssettingbuttonPosition,
        ]}
        onPress={() => navigation.navigate("PictureOfClosetSetting")}
      >
        <View
          style={[
            styles.friendssettingbuttonChild,
            styles.friendssettingbuttonPosition1,
          ]}
        />
        <Text style={styles.text6}>옷장 재설정하기</Text>
      </Pressable>
      <Pressable
        style={[
          styles.friendssettingbutton3,
          styles.friendssettingbuttonPosition,
        ]}
        onPress={() => navigation.navigate("Login")}
      >
        <View
          style={[
            styles.friendssettingbuttonChild,
            styles.friendssettingbuttonPosition1,
          ]}
        />
        <Text style={styles.text6}>로그아웃</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  viewPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 53,
    left: "50%",
    marginLeft: -49,
    width: 229,
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    marginLeft: -114.5,
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  friendssettingbuttonPosition1: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  friendssettingbuttonPosition: {
    left: "-0.28%",
    right: "0.28%",
    height: "8.13%",
    position: "absolute",
    width: "100%",
  },
  pexelsCottonbroStudio915469Icon: {
    top: 86,
    width: 125,
    height: 195,
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
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
    width: 101,
    top: 0,
    left: 0,
    position: "absolute",
  },
  outfitOfThe: {
    top: 27,
    left: 7,
    color: Color.mediumslateblue_200,
    width: 87,
    height: 23,
    fontSize: FontSize.size_5xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
    position: "absolute",
  },
  logotext: {
    top: 36,
    left: 130,
    height: 50,
    width: 101,
    position: "absolute",
  },
  signuptoolbarIcon: {
    top: 20,
    height: 54,
  },
  icon: {
    right: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 40,
    top: 0,
  },
  view: {
    height: 86,
    top: 0,
  },
  text: {
    marginTop: -26.7,
    lineHeight: 12,
    color: Color.inkLighter,
    height: 24,
    width: 229,
    textAlign: "left",
    marginLeft: -114.5,
    fontSize: FontSize.size_5xs,
  },
  text1: {
    marginTop: -4.95,
    fontSize: FontSize.size_base,
    lineHeight: 16,
    color: Color.inkDarkest,
    width: 223,
    height: 32,
  },
  parent: {
    marginTop: -155.7,
  },
  group: {
    marginTop: -92.41,
  },
  container: {
    marginTop: -219,
  },
  friendssettingbuttonChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_xl,
    borderColor: "#0d38ce",
    right: "0%",
    borderWidth: 1,
    borderStyle: "solid",
  },
  text6: {
    fontSize: FontSize.size_5xl,
    color: Color.darkblue_100,
    height: 52,
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    width: 360,
    top: 0,
    left: 0,
    position: "absolute",
  },
  friendssettingbutton: {
    bottom: "41.88%",
    height: "8.13%",
    right: "0%",
    top: "50%",
  },
  friendssettingbutton1: {
    top: "61.88%",
    bottom: "30%",
    height: "8.13%",
    right: "0%",
  },
  friendssettingbutton2: {
    top: "73.75%",
    bottom: "18.13%",
  },
  friendssettingbutton3: {
    top: "85.63%",
    bottom: "6.25%",
  },
  settings: {
    borderColor: "#000",
    flex: 1,
    height: 640,
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
  },
});

export default Settings;
