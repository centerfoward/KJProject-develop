import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ChoosePassionKeyword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.choosepassionkeyword}>
      <View style={styles.chosepassionkeyword}>
        <View style={[styles.keywordchoose, styles.keywordchooseLayout]}>
          <Image
            style={styles.keywordchooseChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.text, styles.textTypo2]}>키치</Text>
        </View>
        <Text style={[styles.text1, styles.textTypo1]}>키워드 선택</Text>
        <View style={[styles.signuptoolbar, styles.signuptoolbarLayout]}>
          <View
            style={[styles.signuptoolbarChild, styles.signuptoolbarLayout]}
          />
          <Text style={[styles.text2, styles.textTypo1]}>회원가입</Text>
          <Image
            style={[styles.epbackIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/epback.png")}
          />
        </View>
        <View style={[styles.keywordchoose4, styles.keywordchooseLayout]}>
          <Image
            style={styles.keywordchooseChild}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Text style={[styles.text3, styles.textTypo]}>캐주얼</Text>
        </View>
        <View style={[styles.keywordchoose3, styles.keywordchooseLayout]}>
          <Image
            style={styles.keywordchooseChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.text4, styles.textTypo2]}>와이드</Text>
        </View>
        <View style={[styles.keywordchoose2, styles.keywordchooseLayout]}>
          <Image
            style={styles.keywordchooseChild}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={[styles.text5, styles.textTypo]}>레트로</Text>
        </View>
        <View style={[styles.keywordchoose5, styles.keywordchooseLayout]}>
          <Image
            style={styles.keywordchooseChild}
            resizeMode="cover"
            source={require("../assets/ellipse-11.png")}
          />
          <Text style={styles.y2k}>y2k</Text>
        </View>
        <Pressable
          style={[styles.nextbutton, styles.text6Layout]}
          onPress={() => navigation.navigate("ChooseStyleCoordi")}
        >
          <Image
            style={styles.nextbuttonChild}
            resizeMode="cover"
            source={require("../assets/rectangle-39.png")}
          />
          <Text style={[styles.text6, styles.text6Layout]}>다음으로</Text>
        </Pressable>
        <Image
          style={[styles.icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keywordchooseLayout: {
    height: 100,
    width: 100,
    position: "absolute",
  },
  textTypo2: {
    height: 42,
    top: 29,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  signuptoolbarLayout: {
    height: 54,
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  textTypo: {
    width: 67,
    left: 16,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    top: 29,
    position: "absolute",
  },
  text6Layout: {
    height: 52,
    width: 360,
    left: 0,
    position: "absolute",
  },
  keywordchooseChild: {
    left: -4,
    width: 108,
    height: 108,
    top: 0,
    position: "absolute",
  },
  text: {
    left: 21,
    width: 58,
    color: Color.darkblue_100,
    height: 42,
    top: 29,
  },
  keywordchoose: {
    top: 175,
    left: 43,
  },
  text1: {
    height: "6.25%",
    width: "43.89%",
    top: "11.56%",
    left: "28.06%",
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.gray_100,
  },
  signuptoolbarChild: {
    top: 0,
  },
  text2: {
    top: 9,
    left: 105,
    color: Color.gray_400,
    width: 138,
    height: 30,
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  epbackIcon: {
    top: 12,
    width: 24,
    height: 24,
  },
  signuptoolbar: {
    top: 20,
  },
  text3: {
    color: Color.darkslategray_100,
  },
  keywordchoose4: {
    top: 371,
    left: 55,
  },
  text4: {
    left: 17,
    color: Color.black,
    width: 70,
    height: 42,
    top: 29,
  },
  keywordchoose3: {
    top: 167,
    left: 224,
  },
  text5: {
    color: Color.gray_100,
  },
  keywordchoose2: {
    top: 251,
    left: 130,
  },
  y2k: {
    top: 35,
    color: Color.powderblue,
    width: 68,
    height: 29,
    left: 16,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  keywordchoose5: {
    top: 351,
    left: 209,
  },
  nextbuttonChild: {
    top: 2,
    left: 1,
    borderRadius: Border.br_xl,
    width: 358,
    height: 58,
    position: "absolute",
  },
  text6: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    height: 52,
    color: Color.darkblue_100,
    top: 0,
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
  },
  icon: {
    top: -11,
    right: 0,
    maxWidth: "100%",
    height: 40,
  },
  chosepassionkeyword: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 640,
  },
  choosepassionkeyword: {
    flex: 1,
    width: "100%",
    height: 640,
  },
});

export default ChoosePassionKeyword;
