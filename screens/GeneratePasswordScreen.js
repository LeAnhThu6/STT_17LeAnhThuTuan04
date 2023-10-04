import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const GeneratePasswordScreen = () => {
  return (
    <View style={styles.c}>
      <View style={styles.background1Parent}>
        <Image
          style={styles.background1Icon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <View style={[styles.backgroundInParent, styles.backgroundLayout]}>
          <View style={[styles.backgroundIn, styles.backgroundLayout]} />
          <View style={styles.passwordGeneratorParent}>
            <Text style={[styles.passwordGenerator, styles.passFlexBox]}>
              PASSWORD GENERATOR
            </Text>
            <TouchableOpacity
              style={[styles.btngenerateParent, styles.btngeneratePosition]}
            >
              <View style={[styles.btngenerate, styles.btngeneratePosition]} />
              <Text
                style={styles.generatePassword}
              >{`GENERATE PASSWORD `}</Text>
            </TouchableOpacity>
            <View style={styles.frameParent}>
              <View style={styles.passwordLengthParent}>
                <Text style={styles.includeTypo}>Password length</Text>
                <TextInput style={styles.frameChild} />
              </View>
              <View style={styles.includeLowerCaseLettersParent}>
                <Text style={[styles.includeLowerCase, styles.includeTypo]}>
                  Include lower case letters
                </Text>
                <Image
                  style={[styles.frameItem, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/group-8.png")}
                />
              </View>
              <View style={styles.includeLowerCaseLettersParent}>
                <Text style={[styles.includeUpcaseLetters, styles.includeTypo]}>
                  Include upcase letters
                </Text>
                <View style={[styles.frameInner, styles.frameLayout]} />
              </View>
              <View style={styles.includeLowerCaseLettersParent}>
                <Text style={[styles.includeNumber, styles.includeTypo]}>
                  Include number
                </Text>
                <Image
                  style={[styles.groupIcon, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/group-8.png")}
                />
              </View>
              <View style={styles.includeLowerCaseLettersParent}>
                <Text style={[styles.includeSpecialSymbol, styles.includeTypo]}>
                  Include special symbol
                </Text>
                <View style={[styles.rectangleView, styles.frameLayout]} />
              </View>
            </View>
          </View>
          <View style={[styles.txtpasswordParent, styles.txtpasswordPosition]}>
            <View style={[styles.txtpassword, styles.txtpasswordPosition]} />
            <Text style={[styles.pass, styles.passFlexBox]}>{` `}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundLayout: {
    height: 605,
    width: 329,
    left: "50%",
    position: "absolute",
  },
  passFlexBox: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    position: "absolute",
  },
  btngeneratePosition: {
    height: 56,
    width: 269,
    marginLeft: -134.5,
    left: "50%",
    position: "absolute",
  },
  includeTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  frameLayout: {
    width: 25,
    height: 25,
  },
  txtpasswordPosition: {
    height: 55,
    width: 297,
    marginLeft: -148.5,
    left: "50%",
    position: "absolute",
  },
  background1Icon: {
    width: screenWidth,
    zIndex: 0,
    height: screenHeight,
  },
  backgroundIn: {
    marginLeft: -164.5,
    borderRadius: 15,
    backgroundColor: "#23235b",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    top: 0,
  },
  passwordGenerator: {
    fontSize: 25,
    alignItems: "flex-end",
    height: 103,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    width: 329,
    left: 0,
    top: 0,
  },
  btngenerate: {
    backgroundColor: "#3b3b98",
    top: 0,
  },
  generatePassword: {
    marginTop: -10,
    fontSize: 18,
    alignItems: "center",
    width: 269,
    marginLeft: -134.5,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  btngenerateParent: {
    top: 524,
  },
  frameChild: {
    width: 125,
    marginLeft: 15,
    height: 33,
    backgroundColor: Color.colorWhite,
  },
  passwordLengthParent: {
    width: 291,
    alignItems: "center",
    flexDirection: "row",
  },
  includeLowerCase: {
    width: 247,
    height: 27,
  },
  frameItem: {
    marginLeft: 19,
    height: 25,
  },
  includeLowerCaseLettersParent: {
    marginTop: 26,
    flexDirection: "row",
  },
  includeUpcaseLetters: {
    width: 206,
    height: 26,
  },
  frameInner: {
    marginLeft: 60,
    height: 25,
    backgroundColor: Color.colorWhite,
  },
  includeNumber: {
    width: 160,
    height: 25,
  },
  groupIcon: {
    marginLeft: 106,
    height: 25,
  },
  includeSpecialSymbol: {
    width: 213,
    height: 31,
  },
  rectangleView: {
    marginLeft: 53,
    height: 25,
    backgroundColor: Color.colorWhite,
  },
  frameParent: {
    marginLeft: -145.5,
    top: 251,
    left: "50%",
    position: "absolute",
  },
  passwordGeneratorParent: {
    height: 580,
    width: 329,
    left: 0,
    top: 0,
    position: "absolute",
  },
  txtpassword: {
    backgroundColor: "#151537",
    top: 0,
  },
  pass: {
    marginTop: -16.5,
    marginLeft: -125.5,
    fontSize: 12,
    fontFamily: FontFamily.interRegular,
    width: 251,
    height: 33,
    alignItems: "center",
    left: "50%",
    top: "50%",
  },
  txtpasswordParent: {
    top: 137,
  },
  backgroundInParent: {
    marginTop: -303,
    marginLeft: -164,
    zIndex: 1,
    top: "50%",
  },
  background1Parent: {
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  c: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 640,
    backgroundColor: Color.colorWhite,
  },
});

export default GeneratePasswordScreen;
