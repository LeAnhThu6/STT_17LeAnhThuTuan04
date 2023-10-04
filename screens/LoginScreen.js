import * as React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const LoginScreen = () => {
  return (
    <View style={styles.a}>
      <View style={[styles.aInner, styles.aInnerLayout]}>
        <View style={[styles.rectangleParent, styles.parentPosition1]}>
          <LinearGradient
            style={[styles.frameChild, styles.aInnerLayout]}
            locations={[0, 1]}
            colors={["#fbcb00", "#bf9a00"]}
          />
          <View style={styles.forgotYourPasswordParent}>
            <Text style={styles.forgotYourPassword}>Forgot your password?</Text>
            <View style={[styles.groupParent, styles.parentPosition1]}>
              <View style={styles.frameLayout}>
                <View
                  style={[styles.edtpasswordParent, styles.parentPosition1]}
                >
                  <View style={[styles.edtpassword, styles.frameLayout]} />
                  <View
                    style={[styles.avatarUser1Parent, styles.parentFlexBox]}
                  >
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/avatar-user-1.png")}
                    />
                    <Text style={[styles.txtpassword, styles.txtpasswordTypo]}>
                      Name
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.frameContainer, styles.frameLayout]}>
                <View
                  style={[styles.edtpasswordParent, styles.parentPosition1]}
                >
                  <View style={[styles.edtpassword, styles.frameLayout]} />
                  <View style={[styles.frameParent, styles.parentPosition]}>
                    <View style={styles.parentFlexBox}>
                      <Image
                        style={styles.iconLayout}
                        contentFit="cover"
                        source={require("../assets/lock152879-1.png")}
                      />
                      <Text
                        style={[styles.txtpassword1, styles.txtpasswordTypo]}
                      >
                        Password
                      </Text>
                    </View>
                    <Image
                      style={[styles.eye1Icon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/eye-1.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[styles.btnregisterParent, styles.btnregisterPosition]}
            >
              <View style={[styles.btnregister, styles.btnregisterPosition]} />
              <Text style={styles.login}>LOGIN</Text>
            </View>
            <Text style={styles.txtregister}>LOGIN</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aInnerLayout: {
    width: screenWidth,
    height: screenHeight,
  },
  parentPosition1: {
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 54,
    width: 330,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  txtpasswordTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.colorBlack,
  },
  parentPosition: {
    left: 9,
    top: 9,
    zIndex: 1,
    position: "absolute",
  },
  iconLayout: {
    height: 32,
    width: 32,
    overflow: "hidden",
  },
  btnregisterPosition: {
    height: 45,
    top: "50%",
    width: 330,
    left: "50%",
    marginLeft: -165,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: "transparent",
    zIndex: 0,
  },
  forgotYourPassword: {
    bottom: 0,
    height: 27,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    width: 330,
    left: "50%",
    marginLeft: -165,
    position: "absolute",
  },
  edtpassword: {
    backgroundColor: Color.colorSilver,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke,
    borderWidth: 1,
    zIndex: 0,
  },
  txtpassword: {
    marginLeft: 21,
  },
  avatarUser1Parent: {
    left: 9,
    top: 9,
    zIndex: 1,
    position: "absolute",
  },
  edtpasswordParent: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  txtpassword1: {
    marginLeft: 17,
  },
  eye1Icon: {
    marginLeft: 127,
  },
  frameParent: {
    flexDirection: "row",
  },
  frameContainer: {
    marginTop: 20,
  },
  groupParent: {
    top: 119,
    left: 0,
    position: "absolute",
  },
  btnregister: {
    marginTop: -22.5,
    borderRadius: 2,
    backgroundColor: "#060000",
  },
  login: {
    marginTop: -13.5,
    marginLeft: -73,
    color: Color.colorWhite,
    width: 147,
    top: "50%",
    height: 27,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: "50%",
    position: "absolute",
  },
  btnregisterParent: {
    marginTop: 94.5,
  },
  txtregister: {
    fontSize: 30,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    width: 330,
    left: "50%",
    marginLeft: -165,
    top: 0,
    position: "absolute",
  },
  forgotYourPasswordParent: {
    bottom: 109,
    height: 423,
    zIndex: 1,
    width: 330,
    left: "50%",
    marginLeft: -165,
    position: "absolute",
  },
  rectangleParent: {
    flexDirection: "row",
    top: 0,
    left: 0,
    position: "absolute",
  },
  aInner: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  a: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 640,
  },
});

export default LoginScreen;
