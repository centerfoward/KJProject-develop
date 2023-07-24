import * as React from "react";
import { Text, StyleSheet, View, Image, Button, Pressable } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
import ButtonCustom from "../components/Button";



const Login = () => {
  const navigation = useNavigation();
  const onPress = () =>{
  navigation.navigate('MainPage');
}

  return (
    <View style={[styles.login, styles.loginLayout]}>
      <View style={[styles.login1, styles.loginShadowBox]}>
        <View style={styles.logotext}>
          <Text style={[styles.oott, styles.oottFlexBox]}>OOTT</Text>
          <Text style={[styles.outfitOfThe, styles.oottFlexBox]}>
            Outfit OF the Travel
          </Text>
        </View>
        <Pressable onPress={onPress}>
        <View style={[styles.view, styles.viewLayout]}>
          <Image
            style={[styles.bgIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/bg1.png")}
          />
          <Text style={styles.text}>카카오 로그인</Text>
        </View>
        </Pressable>
        <View style={[styles.loginButton, styles.loginButtonBorder]}>
          <ButtonCustom 
          onPress={onPress}
          style={styles.loginText}
          text="로그인"/>
        </View>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={[styles.rememberMe, styles.frameLayout]}>
            <Text style={[styles.forgotPasswordText, styles.forgotTypo]}>
              비밀번호 찾기
            </Text>
            <View style={[styles.frame1, styles.framePosition]}>
              <Text style={[styles.rememberMeText, styles.rememberPosition]}>
                자동로그인
              </Text>
              <View style={[styles.frame2, styles.framePosition]}>
                <View
                  style={[styles.rectangleRemember, styles.rememberPosition]}
                />
                <Image
                  style={[styles.tickIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/tick.png")}
                />
              </View>
            </View>
          </View>
          <Text style={[styles.forgotPasswordText1, styles.forgotTypo]}>
            아이디 찾기
          </Text>
        </View>
        <View style={[styles.emailFieldText, styles.fieldLayout]}>
          <Text style={[styles.text1, styles.textTypo]}>이메일</Text>
          <View style={[styles.frame3, styles.frameBorder]}>
            <Text style={styles.emailText}>카카오 메일, 아이디, 전화번호</Text>
          </View>
        </View>
        <View style={[styles.passwordFieldText, styles.fieldLayout]}>
          <Text style={[styles.text2, styles.textTypo]}>비밀번호</Text>
          <View style={[styles.frame4, styles.frameBorder]}>
            <Text style={styles.emailText}>비밀번호</Text>
            <Image
              style={styles.eyeIcon}
              resizeMode="cover"
              source={require("../assets/eye-icon.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 640,
    overflow: "hidden",
  },
  loginShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  oottFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.tenada,
    fontWeight: "800",
    position: "absolute",
  },
  viewLayout: {
    height: 48,
    width: 312,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginButtonBorder: {
    backgroundColor: Color.white,
    borderWidth: 1,
    borderStyle: "solid",
  },
  frameLayout: {
    height: 23,
    width: 311,
    position: "absolute",
  },
  forgotTypo: {
    color: Color.indianred,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  framePosition: {
    height: 20,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rememberPosition: {
    top: "0%",
    position: "absolute",
  },
  fieldLayout: {
    height: 74,
    width: 312,
    left: 28,
    position: "absolute",
  },
  textTypo: {
    height: 21,
    color: Color.dimgray,
    fontSize: FontSize.bodytext200_size,
    left: "50%",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  frameBorder: {
    borderColor: "rgba(0, 0, 0, 0.4)",
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_3xs,
    top: 26,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
  },
  oott: {
    fontSize: FontSize.size_35xl,
    color: Color.white,
    height: 100,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    width: 250,
    left: 0,
    top: 0,
  },
  outfitOfThe: {
    top: 34,
    left: 54,
    fontSize: FontSize.size_5xs,
    color: Color.mediumslateblue_100,
    width: 143,
    height: 30,
  },
  logotext: {
    top: 61,
    left: 52,
    height: 39,
    width: 250,
    position: "absolute",
  },
  bgIcon: {
    height: "56.26%",
    width: "12.82%",
    top: "22.92%",
    right: "81.73%",
    bottom: "20.83%",
    left: "5.45%",
    borderRadius: Border.br_xs,
  },
  text: {
    top: 11,
    left: 57,
    color: "rgba(0, 0, 0, 0.85)",
    width: 200,
    height: 27,
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  view: {
    top: 433,
    backgroundColor: "#fee500",
    borderRadius: Border.br_xs,
    left: 28,
    width: 312,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  loginText: {
    top: 15,
    left: 133,
    color: "rgba(13, 56, 206, 0.9)",
    textAlign: "left",
    fontFamily: FontFamily.oNEMobileOTF,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  loginButton: {
    top: 360,
    borderRadius: Border.br_xl,
    left: 29,
    height: 48,
    width: 312,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    borderColor: "#000",
    backgroundColor: Color.white,
  },
  forgotPasswordText: {
    left: 224,
  },
  rememberMeText: {
    left: "28.13%",
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: "#000c14",
    fontSize: FontSize.size_mini,
    top: "0%",
    textAlign: "left",
  },
  rectangleRemember: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 5,
    borderColor: "#cdd1e0",
    backgroundColor: Color.white,
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%",
  },
  tickIcon: {
    height: "50.16%",
    width: "67.9%",
    top: "21.68%",
    right: "16.26%",
    bottom: "28.16%",
    left: "15.84%",
    borderRadius: 1,
  },
  frame2: {
    width: 20,
  },
  frame1: {
    width: 96,
  },
  rememberMe: {
    left: 0,
    top: 0,
  },
  forgotPasswordText1: {
    left: 144,
  },
  frame: {
    top: 307,
    left: 29,
    overflow: "hidden",
  },
  text1: {
    marginLeft: -151,
    width: 54,
  },
  emailText: {
    top: 13,
    left: 10,
    color: Color.gray_200,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frame3: {
    width: 313,
    height: 49,
  },
  emailFieldText: {
    top: 114,
  },
  text2: {
    marginLeft: -156,
    width: 78,
  },
  eyeIcon: {
    top: 17,
    left: 279,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  frame4: {
    height: 48,
    width: 312,
  },
  passwordFieldText: {
    top: 208,
  },
  login1: {
    width: 360,
    left: 0,
    top: 0,
    overflow: "hidden",
    height: 640,
  },
  login: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    height: 640,
    borderColor: "#000",
  },
});

export default Login;
