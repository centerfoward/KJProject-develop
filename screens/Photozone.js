import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Photozone = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.photozone}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/-20230517--222-1.png")}
      />
      <Text style={styles.photozone1}>PhotoZone</Text>
      <Image
        style={styles.famapMarkerIcon}
        resizeMode="cover"
        source={require("../assets/famapmarker.png")}
      />
      <View style={[styles.locationinfo, styles.locationinfoLayout]}>
        <Image
          style={[styles.locationinfoChild, styles.icon2Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-351.png")}
        />
        <Text
          style={[styles.text, styles.textFlexBox]}
        >{`해운대 달맞이길 `}</Text>
        <Text style={[styles.text1, styles.textFlexBox]}>
          해운대 달맞이는 해운대해수욕장의 끝자락에 위치한 작은 언덕입니다.
          이곳에서는 바다와 해변을 바라보며 달을 감상할 수 있습니다. 특히
          보름달이 떠오를 때, 그 경치는 아름답고 로맨틱한 분위기를 자아냅니다.
        </Text>
      </View>
      <View style={styles.maintoolbar}>
        <Image
          style={[styles.akarIconssearch, styles.icon2Position]}
          resizeMode="cover"
          source={require("../assets/akariconssearch.png")}
        />
        <View style={[styles.logotext, styles.oottLayout]}>
          <Text style={[styles.oott, styles.oottTypo]}>OOTT</Text>
          <Text style={[styles.outfitOfThe, styles.outfitFlexBox]}>
            Outfit OF the Travel
          </Text>
        </View>
        <Pressable
          style={styles.epback}
          onPress={() => navigation.navigate("MainPage")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/epback.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.icon2, styles.icon2Position]}
        resizeMode="cover"
        source={require("../assets/2.png")}
      />
      <View style={styles.bottomnavigationbar}>
        <Text style={[styles.outfitOfThe1, styles.outfitFlexBox]}>
          Outfit OF the Travel
        </Text>
        <Image
          style={[styles.homeAlt2Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/homealt2.png")}
        />
        <View style={[styles.logotext1, styles.oott1Layout]}>
          <Text style={[styles.oott1, styles.oott1Layout]}>OOTT</Text>
        </View>
        <Image
          style={[styles.peopleIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/people.png")}
        />
        <Pressable
          style={styles.iconPosition}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image
            style={[styles.icon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/user.png")}
          />
        </Pressable>
        <Image
          style={[styles.locationIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/location.png")}
        />
        <Text style={[styles.home, styles.homeTypo]}>home</Text>
        <Text style={[styles.friends, styles.homeTypo]}>Friends</Text>
        <Text style={[styles.mypage, styles.homeTypo]}>MyPage</Text>
        <Text style={[styles.photozone2, styles.outfitFlexBox]}>PhotoZone</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationinfoLayout: {
    width: 360,
    left: 0,
  },
  icon2Position: {
    top: 0,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.darkblue_100,
    position: "absolute",
  },
  oottLayout: {
    width: 101,
    position: "absolute",
  },
  oottTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.white,
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
  },
  outfitFlexBox: {
    fontSize: FontSize.size_5xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  iconPosition: {
    left: "50%",
    top: "50%",
    height: 24,
    width: 24,
    position: "absolute",
  },
  oott1Layout: {
    width: 67,
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  homeTypo: {
    height: 4,
    top: 53,
    fontSize: FontSize.size_5xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.darkblue_100,
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    position: "absolute",
  },
  icon: {
    top: 123,
    left: 20,
    width: 321,
    height: 362,
    position: "absolute",
  },
  photozone1: {
    top: 81,
    width: 116,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.darkblue_100,
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    left: 126,
    position: "absolute",
  },
  famapMarkerIcon: {
    top: 367,
    left: 188,
    width: 37,
    height: 56,
    overflow: "hidden",
    position: "absolute",
  },
  locationinfoChild: {
    height: 210,
    width: 360,
    left: 0,
  },
  text: {
    top: 233,
    left: 88,
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
  },
  text1: {
    top: 280,
    height: 110,
    width: 360,
    left: 0,
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  locationinfo: {
    top: 509,
    height: 131,
    position: "absolute",
  },
  akarIconssearch: {
    left: 300,
    width: 54,
    height: 54,
    overflow: "hidden",
  },
  oott: {
    fontSize: FontSize.size_13xl,
    height: 38,
    width: 101,
    position: "absolute",
  },
  outfitOfThe: {
    top: 27,
    color: Color.mediumslateblue_200,
    width: 87,
    height: 23,
    left: 7,
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
  },
  logotext: {
    top: 2,
    height: 50,
    left: 126,
    width: 101,
  },
  epback: {
    top: 13,
    height: 24,
    width: 24,
    left: 0,
    position: "absolute",
  },
  maintoolbar: {
    top: 29,
    width: 354,
    height: 50,
    left: 7,
    position: "absolute",
  },
  icon2: {
    right: 0,
    left: 1,
    maxWidth: "100%",
    height: 40,
    overflow: "hidden",
  },
  outfitOfThe1: {
    top: 51,
    left: 142,
    color: Color.mediumslateblue_100,
    width: 78,
    height: 8,
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
  },
  homeAlt2Icon: {
    marginLeft: -156,
    marginTop: -13.5,
    top: "50%",
    overflow: "hidden",
  },
  oott1: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.white,
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  logotext1: {
    top: 24,
    left: 147,
  },
  peopleIcon: {
    marginLeft: 63,
    marginTop: -13.5,
    top: "50%",
    overflow: "hidden",
  },
  icon3: {
    marginTop: -12.5,
    marginLeft: 133,
  },
  locationIcon: {
    marginLeft: -86,
    marginTop: -13.5,
    top: "50%",
    overflow: "hidden",
  },
  home: {
    left: 24,
    width: 24,
    top: 53,
  },
  friends: {
    left: 240,
    width: 30,
  },
  mypage: {
    left: 309,
    width: 32,
  },
  photozone2: {
    top: 54,
    left: 92,
    width: 27,
    height: 7,
    color: Color.darkblue_100,
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
  },
  bottomnavigationbar: {
    top: 568,
    left: -1,
    backgroundColor: Color.white,
    borderColor: "#0d38ce",
    width: 361,
    height: 72,
    overflow: "hidden",
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
  },
  photozone: {
    borderColor: "#000",
    flex: 1,
    height: 640,
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
  },
});

export default Photozone;
