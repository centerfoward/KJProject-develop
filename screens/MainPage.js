import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const MainPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.mainpage, styles.mainpageBorder]}>
      <View style={styles.toolbarPosition}>
        <LinearGradient
          style={[styles.statusbar, styles.toolbarPosition]}
          locations={[0, 1]}
          colors={["rgba(62, 100, 255, 0)", "rgba(157, 198, 255, 0)"]}
          useAngle={true}
          angle={180}
        >
          <Text style={styles.text}>12:00</Text>
          <Image
            style={styles.fluentbattery920RegularIcon}
            resizeMode="cover"
            source={require("../assets/fluentbattery920regular.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
        </LinearGradient>
      </View>
      <View style={[styles.advertisesection, styles.advertisesectionLayout]}>
        <View
          style={[styles.advertisesectionChild, styles.advertisesectionLayout]}
        />
        <Image
          style={[styles.icon, styles.advertisesectionLayout]}
          resizeMode="cover"
          source={require("../assets/-1-1.png")}
        />
      </View>
      <View style={styles.recomendationusergarmet}>
        <Image
          style={[styles.icon1, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/-20230515--1015-2.png")}
        />
        <Image
          style={[styles.icon2, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/-20230515--1015-2.png")}
        />
        <Image
          style={[styles.icon3, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/-20230515--1015-2.png")}
        />
        <Image
          style={[styles.icon4, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/-20230515--1015-2.png")}
        />
        <Text style={[styles.userContainer, styles.userContainerTypo]}>
          <Text style={styles.text1}>{`더 즐거운 여행을 위한
`}</Text>
          <Text style={styles.user}>“user”</Text>
          <Text style={styles.text1}>님을 위한 쇼핑 리스트</Text>
        </Text>
      </View>
      <View style={[styles.recomendationgarmet, styles.friednslookPosition]}>
        <Text style={[styles.d1, styles.d1Typo]}>{`3D모델링한 이미지1 `}</Text>
        <Text style={[styles.d2, styles.d1Typo]}>3D모델링한 이미지2</Text>
        <Text style={[styles.d3, styles.d1Typo]}>{`3D모델링한 이미지3 `}</Text>
        <Text style={[styles.d31, styles.d1Typo]}>{`3D모델링한 이미지3 `}</Text>
        <Text style={[styles.d32, styles.d1Typo]}>{`3D모델링한 이미지3 `}</Text>
        <Text style={[styles.userContainer1, styles.toBusanFlexBox]}>
          <Text style={styles.userContainer2}>
            <Text style={styles.user}>“user”</Text>
            <Text style={styles.text1}>님을 위한 추천룩</Text>
          </Text>
        </Text>
        <Image
          style={[
            styles.pexelsTheLazyArtistGalleryIcon,
            styles.pexelsIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/pexelsthelazyartistgallery1300550.png")}
        />
        <Image
          style={[
            styles.pexelsMikotorawPhotographerIcon,
            styles.pexelsIconLayout1,
          ]}
          resizeMode="cover"
          source={require("../assets/pexelsmikotorawphotographer4132651.png")}
        />
        <Image
          style={[styles.pexelsTusninDas2772535Icon, styles.pexelsIconLayout1]}
          resizeMode="cover"
          source={require("../assets/pexelstusnindas2772535.png")}
        />
        <Image
          style={[styles.pexelsRaduFlorin2536584Icon, styles.pexelsIconLayout1]}
          resizeMode="cover"
          source={require("../assets/pexelsraduflorin2536584.png")}
        />
      </View>
      <View
        style={[styles.usertravelschedule, styles.usertravelscheduleLayout]}
      >
        <Image
          style={[styles.lucideplaneIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/lucideplane.png")}
        />
        <Text style={[styles.toBusan, styles.text4Typo]}>
          2022-06-07~2022-06-09 to busan
        </Text>
        <Text style={[styles.text4, styles.text4Typo]}>
          # 부산여행#우정여행 # 레저 # 호캉스# 편안한# ㅗㅗㅗ# ㅗㅗㅗㅗㅗ
        </Text>
        <Image
          style={[styles.materialSymbolstagIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require("../assets/materialsymbolstag.png")}
        />
        <View style={styles.icbaselineTag} />
        <Image
          style={[
            styles.pexelsCottonbroStudio915469Icon,
            styles.usertravelscheduleLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/pexelscottonbrostudio9154696-1.png")}
        />
      </View>
      <View style={[styles.friednslook, styles.friednslookPosition]}>
        <Image
          style={[styles.icon5, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-20230707--526-1.png")}
        />
        <Image
          style={[styles.icon6, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-20230707--526-1.png")}
        />
        <Image
          style={[styles.icon7, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/-20230707--526-2.png")}
        />
        <Text style={[styles.user2Container, styles.userContainerTypo]}>
          <Text style={styles.text1}>{`함께 여행하는 친구 `}</Text>
          <Text style={styles.user}>“user2”</Text>
          <Text style={styles.text1}>{`는 
이렇게 입는대요!
친구의 룩에 코멘트를 남겨보세요!`}</Text>
        </Text>
        <Image
          style={[
            styles.pexelsArchifashiondesign9573Icon,
            styles.pexelsIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/pexelsarchifashiondesign9573706-1.png")}
        />
        <Image
          style={[
            styles.pexelsCottonbroStudio983492Icon,
            styles.pexelsIconLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/pexelscottonbrostudio9834926-1.png")}
        />
        <Image
          style={[styles.pexelsLizaBakay111577612Icon, styles.pexelsIconLayout]}
          resizeMode="cover"
          source={require("../assets/pexelslizabakay11157761-2.png")}
        />
        <Image
          style={[styles.icon8, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/-20230707--526-2.png")}
        />
        <Image
          style={[styles.pexelsEunhyukAhn29070341Icon, styles.pexelsIconLayout]}
          resizeMode="cover"
          source={require("../assets/pexelseunhyukahn2907034-1.png")}
        />
      </View>
      <Image
        style={styles.icon9}
        resizeMode="cover"
        source={require("../assets/1.png")}
      />
      <View style={styles.maintoolbar}>
        <Image
          style={styles.akarIconssearch}
          resizeMode="cover"
          source={require("../assets/akariconssearch1.png")}
        />
        <View style={styles.logotext}>
          <Text style={[styles.oott, styles.oottTypo]}>OOTT</Text>
          <Text style={[styles.outfitOfThe, styles.outfitTypo]}>
            Outfit OF the Travel
          </Text>
        </View>
      </View>
      <View style={[styles.bottomnavigationbar, styles.mainpageBorder]}>
        <Text style={[styles.outfitOfThe1, styles.outfitTypo]}>
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
        <Text style={[styles.home, styles.homeTypo]}>home</Text>
        <Text style={[styles.friends, styles.homeTypo]}>Friends</Text>
        <Pressable
          style={[styles.photozonebtn, styles.photozoneLayout]}
          onPress={() => navigation.navigate("Photozone")}
        >
          <Image
            style={[styles.locationIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/location.png")}
          />
          <Text style={[styles.photozone, styles.photozoneLayout]}>
            PhotoZone
          </Text>
        </Pressable>
        <Pressable
          style={[styles.settingbtn, styles.settingLayout]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={[styles.setting, styles.settingLayout]}>Setting</Text>
          <Image
            style={[styles.settingsIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/settings.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainpageBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  toolbarPosition: {
    height: 20,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    bottom: "15%",
    width: "3.89%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  advertisesectionLayout: {
    height: 150,
    width: 360,
    position: "absolute",
  },
  iconLayout2: {
    height: 106,
    width: 96,
    top: 63,
    position: "absolute",
  },
  userContainerTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    position: "absolute",
  },
  friednslookPosition: {
    width: 357,
    left: 3,
    position: "absolute",
  },
  d1Typo: {
    height: 16,
    width: 95,
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.oNEMobileOTF,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  toBusanFlexBox: {
    alignItems: "center",
    display: "flex",
  },
  pexelsIconLayout1: {
    height: 160,
    width: 150,
    borderRadius: Border.br_xs,
    top: 38,
    position: "absolute",
  },
  usertravelscheduleLayout: {
    height: 195,
    position: "absolute",
  },
  iconPosition1: {
    width: 53,
    left: 120,
    overflow: "hidden",
    position: "absolute",
  },
  text4Typo: {
    width: 187,
    left: 173,
    color: Color.darkblue_100,
    textAlign: "left",
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    height: 19,
    width: 20,
    top: 246,
    position: "absolute",
  },
  iconLayout1: {
    width: 20,
    height: 20,
    position: "absolute",
  },
  pexelsIconLayout: {
    top: 70,
    height: 160,
    width: 150,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  oottTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.white,
    left: 0,
    top: 0,
  },
  outfitTypo: {
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  iconPosition: {
    height: 24,
    left: "50%",
    top: "50%",
    width: 24,
    position: "absolute",
  },
  oott1Layout: {
    width: 67,
    height: 24,
    position: "absolute",
  },
  homeTypo: {
    height: 4,
    alignItems: "center",
    color: Color.darkblue_100,
    fontFamily: FontFamily.oNEMobileOTF,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
  },
  photozoneLayout: {
    width: 27,
    position: "absolute",
  },
  settingLayout: {
    width: 32,
    position: "absolute",
  },
  text: {
    top: 4,
    left: 19,
    fontFamily: FontFamily.interBold,
    alignItems: "flex-end",
    height: 12,
    width: 24,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
    color: Color.white,
    position: "absolute",
  },
  fluentbattery920RegularIcon: {
    left: 326,
    width: 14,
    height: 15,
    overflow: "hidden",
    top: 2,
    position: "absolute",
  },
  vectorIcon: {
    height: "70%",
    top: "15%",
    right: "15%",
    left: "81.11%",
  },
  vectorIcon1: {
    height: "65%",
    top: "20%",
    right: "10%",
    left: "86.11%",
  },
  statusbar: {
    backgroundColor: "transparent",
  },
  advertisesectionChild: {
    backgroundColor: Color.gainsboro,
    left: 0,
    top: 0,
  },
  icon: {
    left: 0,
    top: 0,
  },
  advertisesection: {
    top: 833,
    left: 3,
  },
  icon1: {
    left: 17,
  },
  icon2: {
    left: 121,
  },
  icon3: {
    left: 225,
  },
  icon4: {
    left: 329,
  },
  text1: {
    color: Color.black,
  },
  user: {
    color: Color.darkblue_100,
  },
  userContainer: {
    top: 10,
    left: 17,
  },
  recomendationusergarmet: {
    top: 1003,
    left: -14,
    width: 377,
    height: 245,
    position: "absolute",
  },
  d1: {
    left: 9,
    top: 207,
    height: 16,
    width: 95,
    color: Color.black,
  },
  d2: {
    left: 172,
    top: 207,
    height: 16,
    width: 95,
    color: Color.black,
  },
  d3: {
    left: 331,
    top: 207,
    height: 16,
    width: 95,
    color: Color.black,
  },
  d31: {
    top: 172,
    left: 323,
    height: 16,
    width: 95,
    color: Color.white,
  },
  d32: {
    left: 498,
    top: 207,
    height: 16,
    width: 95,
    color: Color.black,
  },
  userContainer2: {
    lineBreak: "anywhere",
    width: "100%",
  },
  userContainer1: {
    width: 163,
    height: 34,
    left: 9,
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    position: "absolute",
    top: 0,
  },
  pexelsTheLazyArtistGalleryIcon: {
    left: 9,
  },
  pexelsMikotorawPhotographerIcon: {
    left: 172,
  },
  pexelsTusninDas2772535Icon: {
    left: 335,
  },
  pexelsRaduFlorin2536584Icon: {
    left: 498,
  },
  recomendationgarmet: {
    top: 304,
    height: 223,
  },
  lucideplaneIcon: {
    top: 8,
    height: 58,
  },
  toBusan: {
    top: 25,
    height: 22,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    left: 173,
  },
  text4: {
    top: 76,
    fontSize: FontSize.size_xs,
    height: 97,
  },
  materialSymbolstagIcon: {
    top: 64,
    height: 57,
  },
  icbaselineTag: {
    top: 69,
    left: 124,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 36,
    height: 47,
    overflow: "hidden",
    position: "absolute",
  },
  pexelsCottonbroStudio915469Icon: {
    left: -3,
    width: 125,
    top: 0,
  },
  usertravelschedule: {
    top: 89,
    left: 3,
    width: 360,
    height: 195,
  },
  icon5: {
    left: 130,
  },
  icon6: {
    left: 628,
  },
  icon7: {
    left: 296,
    top: 246,
    width: 20,
  },
  user2Container: {
    left: 0,
    top: 0,
  },
  pexelsArchifashiondesign9573Icon: {
    left: 0,
  },
  pexelsCottonbroStudio983492Icon: {
    left: 166,
  },
  pexelsLizaBakay111577612Icon: {
    left: 332,
  },
  icon8: {
    top: 245,
    left: 462,
  },
  pexelsEunhyukAhn29070341Icon: {
    left: 498,
  },
  friednslook: {
    top: 547,
    height: 266,
  },
  icon9: {
    right: 0,
    height: 40,
    maxWidth: "100%",
    overflow: "hidden",
    left: 0,
    top: 0,
    position: "absolute",
  },
  akarIconssearch: {
    left: 300,
    width: 54,
    height: 54,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  oott: {
    fontSize: FontSize.size_13xl,
    height: 38,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    width: 101,
    position: "absolute",
  },
  outfitOfThe: {
    top: 27,
    left: 7,
    color: Color.mediumslateblue_200,
    width: 87,
    height: 23,
  },
  logotext: {
    left: 126,
    width: 101,
    height: 50,
    top: 2,
    position: "absolute",
  },
  maintoolbar: {
    top: 30,
    left: 6,
    width: 354,
    height: 50,
    position: "absolute",
  },
  outfitOfThe1: {
    top: 51,
    left: 142,
    color: Color.mediumslateblue_100,
    width: 78,
    height: 8,
  },
  homeAlt2Icon: {
    marginLeft: -156,
    marginTop: -13.5,
    height: 24,
    overflow: "hidden",
  },
  oott1: {
    fontSize: FontSize.size_5xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.white,
    left: 0,
    top: 0,
  },
  logotext1: {
    left: 147,
    top: 24,
  },
  peopleIcon: {
    marginLeft: 63,
    marginTop: -13.5,
    height: 24,
    overflow: "hidden",
  },
  home: {
    left: 24,
    top: 53,
    height: 4,
    position: "absolute",
    width: 24,
  },
  friends: {
    left: 240,
    width: 30,
    top: 53,
    height: 4,
    position: "absolute",
  },
  locationIcon: {
    marginTop: -19,
    marginLeft: -10.5,
    overflow: "hidden",
  },
  photozone: {
    top: 31,
    height: 7,
    alignItems: "center",
    display: "flex",
    color: Color.darkblue_100,
    width: 27,
    fontFamily: FontFamily.oNEMobileOTF,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
    left: 0,
  },
  photozonebtn: {
    marginLeft: -89,
    left: "50%",
    top: "50%",
    width: 27,
    marginTop: -13.5,
    height: 38,
  },
  setting: {
    top: 29,
    height: 4,
    alignItems: "center",
    color: Color.darkblue_100,
    fontFamily: FontFamily.oNEMobileOTF,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
    left: 0,
  },
  settingsIcon: {
    marginTop: -16.5,
    marginLeft: -12,
  },
  settingbtn: {
    left: 309,
    height: 33,
    top: 24,
  },
  bottomnavigationbar: {
    top: 565,
    left: 1,
    backgroundColor: Color.white,
    borderColor: "#0d38ce",
    width: 361,
    height: 72,
    overflow: "hidden",
    position: "absolute",
  },
  mainpage: {
    borderColor: "#000",
    flex: 1,
    height: 640,
    width: "100%",
  },
});

export default MainPage;
