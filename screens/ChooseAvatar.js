import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const ChooseAvatar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseavatar}>
      <View style={styles.parent}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/-20230515--936-1.png")}
        />
        <Pressable
          style={styles.nextbuttonShadowBox}
          onPress={() => navigation.navigate("PictureOfCloset")}
        >
          <Image
            style={styles.nextbuttonChild}
            resizeMode="cover"
            source={require("../assets/rectangle-39.png")}
          />
          <Text style={[styles.text, styles.textFlexBox]}>다음으로</Text>
        </Pressable>
        <View style={styles.nextbuttonShadowBox}>
          <Text style={[styles.text1, styles.textFlexBox]}>다음으로</Text>
        </View>
      </View>
      <Text
        style={[styles.text2, styles.textFlexBox]}
      >{`**님의 아바타를 만들어주세요  `}</Text>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: FontFamily.interRegular,
    color: Color.darkblue_100,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    height: 52,
    width: 360,
    left: 0,
    top: 0,
  },
  nextbuttonShadowBox: {
    height: 52,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 544,
    width: 360,
    left: 0,
    position: "absolute",
  },
  text1: {
    fontWeight: "700",
    fontFamily: FontFamily.oNEMobileOTF,
    color: Color.darkblue_100,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    height: 52,
    width: 360,
    left: 0,
    top: 0,
  },
  parent: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 640,
  },
  text2: {
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
    overflow: "hidden",
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  chooseavatar: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 640,
  },
});

export default ChooseAvatar;
