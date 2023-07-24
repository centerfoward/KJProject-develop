import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Input1 = () => {
  return (
    <View style={styles.input1}>
      <View style={[styles.input1Child, styles.input1Bg]} />
      <Text style={styles.text}>일정을 입력하세요</Text>
      <Text style={[styles.text1, styles.textTypo5]}>
        어디를 가나요? (주요 장소를 우선 순위에 놓아주세요)
      </Text>
      <Text style={[styles.text2, styles.textTypo5]}>누구와 함께 가나요?</Text>
      <Text style={[styles.text3, styles.textTypo5]}>왜 가나요?</Text>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/-20230515--959-1.png")}
      />
      <Image
        style={[styles.image4Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <Image
        style={[styles.image5Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <Text style={[styles.text4, styles.textTypo4]}>검색해서 찾기</Text>
      <Text style={[styles.text5, styles.textTypo4]}>친구 찾기</Text>
      <Text style={[styles.text6, styles.textTypo4]}>+(장소 추가)</Text>
      <View style={[styles.input1Item, styles.input1ItemLayout]} />
      <Text style={[styles.text7, styles.textTypo3]}>여행</Text>
      <View style={[styles.input1Inner, styles.input1Bg]} />
      <Text style={[styles.text8, styles.textTypo4]}>우정룩으로 하기!</Text>
      <View style={[styles.rectangleView, styles.input1ItemLayout]} />
      <Text style={[styles.text9, styles.textTypo2]}>여행</Text>
      <View style={[styles.input1Child1, styles.input1ChildLayout1]} />
      <Text style={[styles.text10, styles.textTypo1]}>여행</Text>
      <View style={[styles.input1Child2, styles.input1ChildLayout]} />
      <Text style={[styles.text11, styles.textTypo]}>여행</Text>
      <View style={[styles.input1Child3, styles.input1ChildPosition]} />
      <Text style={[styles.text12, styles.textPosition]}>여행</Text>
      <View style={[styles.input1Child4, styles.input1ChildPosition]} />
      <Text style={[styles.text13, styles.textPosition]}>여행</Text>
      <View style={[styles.input1Child5, styles.text15Position]} />
      <Text style={[styles.text14, styles.textTypo1]}>여행</Text>
      <View style={[styles.input1Child6, styles.textPosition]} />
      <Text style={[styles.text15, styles.text15Position]}>여행</Text>
      <Text style={[styles.text16, styles.textTypo4]}>완료</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input1Bg: {
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  textTypo5: {
    left: 13,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  iconLayout: {
    height: 34,
    width: 32,
    position: "absolute",
  },
  textTypo4: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  input1ItemLayout: {
    height: 19,
    width: 56,
    top: 504,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  textTypo3: {
    left: 37,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  textTypo2: {
    left: 108,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  input1ChildLayout1: {
    left: 163,
    height: 19,
    width: 56,
    backgroundColor: Color.gainsboro,
  },
  textTypo1: {
    left: 179,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  input1ChildLayout: {
    left: 234,
    height: 19,
    width: 56,
    backgroundColor: Color.gainsboro,
  },
  textTypo: {
    left: 250,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  input1ChildPosition: {
    top: 535,
    height: 19,
    width: 56,
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  textPosition: {
    top: 537,
    position: "absolute",
  },
  text15Position: {
    top: 539,
    position: "absolute",
  },
  input1Child: {
    top: 585,
    left: 117,
    width: 85,
    height: 37,
  },
  text: {
    top: 16,
    left: 7,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text1: {
    top: 267,
  },
  text2: {
    top: 365,
  },
  text3: {
    top: 468,
  },
  icon: {
    top: 34,
    left: 0,
    width: 360,
    height: 215,
    position: "absolute",
  },
  image4Icon: {
    left: 38,
    top: 292,
  },
  image5Icon: {
    top: 404,
    left: 33,
  },
  text4: {
    left: 70,
    top: 292,
  },
  text5: {
    top: 413,
    left: 71,
  },
  text6: {
    top: 332,
    left: 54,
  },
  input1Item: {
    left: 21,
  },
  text7: {
    top: 506,
    position: "absolute",
  },
  input1Inner: {
    top: 406,
    left: 202,
    width: 108,
    height: 22,
  },
  text8: {
    top: 408,
    left: 218,
  },
  rectangleView: {
    left: 92,
  },
  text9: {
    top: 506,
    position: "absolute",
  },
  input1Child1: {
    top: 504,
    position: "absolute",
  },
  text10: {
    top: 506,
  },
  input1Child2: {
    top: 504,
    position: "absolute",
  },
  text11: {
    top: 506,
    position: "absolute",
  },
  input1Child3: {
    left: 21,
  },
  text12: {
    left: 37,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  input1Child4: {
    left: 92,
  },
  text13: {
    left: 108,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  input1Child5: {
    left: 163,
    height: 19,
    width: 56,
    backgroundColor: Color.gainsboro,
  },
  text14: {
    top: 541,
  },
  input1Child6: {
    left: 234,
    height: 19,
    width: 56,
    backgroundColor: Color.gainsboro,
  },
  text15: {
    left: 250,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  text16: {
    top: 596,
    left: 144,
  },
  input1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Input1;
