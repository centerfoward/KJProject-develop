import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserPermission = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.userpermission}>
      <Pressable
        style={[styles.prototype, styles.wrapperPosition]}
        onPress={() => navigation.navigate("ChoosePassionKeyword")}
      >
        <View style={styles.wrapperPosition}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/-20230714--335-1.png")}
          />
        </View>
      </Pressable>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 640,
  },
  icon: {
    top: 149,
    left: 55,
    width: 249,
    height: 342,
    position: "absolute",
  },
  prototype: {
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
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
  userpermission: {
    flex: 1,
    width: "100%",
    height: 640,
  },
});

export default UserPermission;
