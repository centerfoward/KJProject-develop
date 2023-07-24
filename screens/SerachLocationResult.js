import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SerachLocationResult = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.serachlocationresult}>
      <Image
        style={styles.vectorIcon}
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
        source={require("../assets/11.png")}
      />
      <View style={styles.logotext}>
        <Text style={styles.oott}>OOTT</Text>
        <Text style={styles.outfitOfThe}>Outfit OF the Travel</Text>
      </View>
      <Text style={styles.text}>어디를 가나요?</Text>
      <View style={styles.serachlocationinfo}>
        <Image
          style={[
            styles.serachlocationinfoChild,
            styles.serachlocationinfoChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Text
          style={[styles.text1, styles.textTypo1]}
        >{`해운대 달맞이길 `}</Text>
        <Text style={[styles.text2, styles.textTypo]}>
          해운대 달맞이는 해운대해수욕장의 끝자락에 위치한 작은 언덕입니다.
          이곳에서는 바다와 해변을 바라보며 달을 감상할 수 있습니다. 특히
          보름달이 떠오를 때, 그 경치는 아름답고 로맨틱한 분위기를 자아냅니다.
        </Text>
        <Image
          style={[styles.serachlocationinfoItem, styles.text3Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Text
          style={[styles.text3, styles.text3Position]}
        >{`해운대 달맞이길 `}</Text>
        <Text style={[styles.text4, styles.textTypo]}>
          해운대 달맞이는 해운대해수욕장의 끝자락에 위치한 작은 언덕입니다.
          이곳에서는 바다와 해변을 바라보며 달을 감상할 수 있습니다. 특히
          보름달이 떠오를 때, 그 경치는 아름답고 로맨틱한 분위기를 자아냅니다.
        </Text>
        <Image
          style={[styles.serachlocationinfoInner, styles.text5Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Text
          style={[styles.text5, styles.text5Position]}
        >{`해운대 달맞이길 `}</Text>
        <Text style={[styles.text6, styles.textTypo]}>
          해운대 달맞이는 해운대해수욕장의 끝자락에 위치한 작은 언덕입니다.
          이곳에서는 바다와 해변을 바라보며 달을 감상할 수 있습니다. 특히
          보름달이 떠오를 때, 그 경치는 아름답고 로맨틱한 분위기를 자아냅니다.
        </Text>
        <Image
          style={[styles.rectangleIcon, styles.text7Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Text
          style={[styles.text7, styles.text7Position]}
        >{`해운대 달맞이길 `}</Text>
        <Text style={[styles.text8, styles.textTypo]}>
          해운대 달맞이는 해운대해수욕장의 끝자락에 위치한 작은 언덕입니다.
          이곳에서는 바다와 해변을 바라보며 달을 감상할 수 있습니다. 특히
          보름달이 떠오를 때, 그 경치는 아름답고 로맨틱한 분위기를 자아냅니다.
        </Text>
        <Image
          style={[styles.serachlocationinfoChild1, styles.text9Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Text
          style={[styles.text9, styles.text9Position]}
        >{`해운대 달맞이길 `}</Text>
        <Text style={[styles.text10, styles.textTypo]}>
          해운대 달맞이는 해운대해수욕장의 끝자락에 위치한 작은 언덕입니다.
          이곳에서는 바다와 해변을 바라보며 달을 감상할 수 있습니다. 특히
          보름달이 떠오를 때, 그 경치는 아름답고 로맨틱한 분위기를 자아냅니다.
        </Text>
        <Image
          style={[styles.serachlocationinfoChild2, styles.text11Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Text
          style={[styles.text11, styles.text11Position]}
        >{`해운대 달맞이길 `}</Text>
        <Text style={[styles.text12, styles.textTypo]}>
          해운대 달맞이는 해운대해수욕장의 끝자락에 위치한 작은 언덕입니다.
          이곳에서는 바다와 해변을 바라보며 달을 감상할 수 있습니다. 특히
          보름달이 떠오를 때, 그 경치는 아름답고 로맨틱한 분위기를 자아냅니다.
        </Text>
        <Image
          style={[styles.serachlocationinfoChild3, styles.text13Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Text
          style={[styles.text13, styles.text13Position]}
        >{`해운대 달맞이길 `}</Text>
        <Text style={[styles.text14, styles.textTypo]}>
          해운대 달맞이는 해운대해수욕장의 끝자락에 위치한 작은 언덕입니다.
          이곳에서는 바다와 해변을 바라보며 달을 감상할 수 있습니다. 특히
          보름달이 떠오를 때, 그 경치는 아름답고 로맨틱한 분위기를 자아냅니다.
        </Text>
        <Image
          style={[styles.serachlocationinfoChild4, styles.text15Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <Text
          style={[styles.text15, styles.text15Position]}
        >{`해운대 달맞이길 `}</Text>
        <Text style={[styles.text16, styles.textTypo]}>
          해운대 달맞이는 해운대해수욕장의 끝자락에 위치한 작은 언덕입니다.
          이곳에서는 바다와 해변을 바라보며 달을 감상할 수 있습니다. 특히
          보름달이 떠오를 때, 그 경치는 아름답고 로맨틱한 분위기를 자아냅니다.
        </Text>
      </View>
      <Pressable
        style={[styles.nextbutton, styles.text17Layout]}
        onPress={() => navigation.navigate("SerachLocation")}
      >
        <Image
          style={styles.nextbuttonChild}
          resizeMode="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <Text style={[styles.text17, styles.text17Layout]}>다음</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  serachlocationinfoChildLayout: {
    height: 70,
    width: 90,
    left: 0,
  },
  textTypo1: {
    color: Color.darkblue_100,
    fontSize: FontSize.size_base,
    left: 100,
    textAlign: "left",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
  },
  textTypo: {
    height: 24,
    width: 232,
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    color: Color.darkblue_100,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  text3Position: {
    top: 563,
    position: "absolute",
  },
  text5Position: {
    top: 383,
    position: "absolute",
  },
  text7Position: {
    top: 291,
    position: "absolute",
  },
  text9Position: {
    top: 194,
    position: "absolute",
  },
  text11Position: {
    top: 97,
    position: "absolute",
  },
  text13Position: {
    top: 653,
    position: "absolute",
  },
  text15Position: {
    top: 473,
    position: "absolute",
  },
  text17Layout: {
    height: 52,
    width: 360,
    left: 0,
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
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    left: 0,
    top: 0,
    maxWidth: "100%",
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
    top: 31,
    left: 129,
    height: 50,
    width: 101,
    position: "absolute",
  },
  text: {
    height: "6.25%",
    width: "43.33%",
    top: "13.44%",
    left: "28.33%",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.gray_100,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  serachlocationinfoChild: {
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 0,
    position: "absolute",
  },
  text2: {
    top: 16,
    left: 100,
    height: 24,
    width: 232,
  },
  serachlocationinfoItem: {
    height: 70,
    width: 90,
    left: 0,
  },
  text3: {
    color: Color.darkblue_100,
    fontSize: FontSize.size_base,
    left: 100,
    textAlign: "left",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
  },
  text4: {
    top: 585,
    left: 100,
    height: 24,
    width: 232,
  },
  serachlocationinfoInner: {
    height: 70,
    width: 90,
    left: 0,
  },
  text5: {
    color: Color.darkblue_100,
    fontSize: FontSize.size_base,
    left: 100,
    textAlign: "left",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
  },
  text6: {
    top: 399,
    left: 100,
    height: 24,
    width: 232,
  },
  rectangleIcon: {
    height: 70,
    width: 90,
    left: 0,
  },
  text7: {
    color: Color.darkblue_100,
    fontSize: FontSize.size_base,
    left: 100,
    textAlign: "left",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
  },
  text8: {
    top: 307,
    left: 100,
    height: 24,
    width: 232,
  },
  serachlocationinfoChild1: {
    height: 70,
    width: 90,
    left: 0,
  },
  text9: {
    color: Color.darkblue_100,
    fontSize: FontSize.size_base,
    left: 100,
    textAlign: "left",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
  },
  text10: {
    top: 210,
    left: 100,
    height: 24,
    width: 232,
  },
  serachlocationinfoChild2: {
    height: 70,
    width: 90,
    left: 0,
  },
  text11: {
    color: Color.darkblue_100,
    fontSize: FontSize.size_base,
    left: 100,
    textAlign: "left",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
  },
  text12: {
    top: 113,
    left: 100,
    height: 24,
    width: 232,
  },
  serachlocationinfoChild3: {
    height: 70,
    width: 90,
    left: 0,
  },
  text13: {
    color: Color.darkblue_100,
    fontSize: FontSize.size_base,
    left: 100,
    textAlign: "left",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
  },
  text14: {
    top: 669,
    left: 100,
    height: 24,
    width: 232,
  },
  serachlocationinfoChild4: {
    height: 70,
    width: 90,
    left: 0,
  },
  text15: {
    color: Color.darkblue_100,
    fontSize: FontSize.size_base,
    left: 100,
    textAlign: "left",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
  },
  text16: {
    top: 488,
    left: 97,
  },
  serachlocationinfo: {
    top: 197,
    left: 21,
    width: 332,
    height: 600,
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
  text17: {
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    height: 52,
    color: Color.darkblue_100,
    fontSize: FontSize.size_5xl,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    top: 0,
  },
  nextbutton: {
    top: 554,
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
  serachlocationresult: {
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

export default SerachLocationResult;
