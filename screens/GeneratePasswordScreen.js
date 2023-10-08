import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { CheckBox } from "@rneui/themed";
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
import { endEvent } from "react-native/Libraries/Performance/Systrace";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const GeneratePasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(true);

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let validChars = "";

    if (includeLowerCase) {
      validChars += lowercaseChars;
    }

    if (includeUpperCase) {
      validChars += uppercaseChars;
    }

    if (includeNumbers) {
      validChars += numberChars;
    }

    if (includeSpecialSymbols) {
      validChars += specialChars;
    }

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      newPassword += validChars.charAt(randomIndex);
    }

    setPassword(newPassword);
  };
  useEffect(() => {
    generatePassword();
  }, [
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSpecialSymbols,
  ]);
  useEffect(() => {
    if (!isNaN(passwordLength)) {
      generatePassword();
    }
  }, [passwordLength]);
  return (
    <View style={styles.c}>
      <View style={[styles.background1Parent, styles.groupChildPosition]}>
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
              onPress={generatePassword}
            >
              <View
                style={[styles.btngenerate, styles.btngeneratePosition]}
              ></View>
              <Text
                style={styles.generatePassword}
              >{`GENERATE PASSWORD `}</Text>
            </TouchableOpacity>
            <View style={styles.frameParent}>
              <View style={styles.passwordLengthParent}>
                <Text style={styles.includeTypo}>Password length</Text>
                <TextInput
                  style={styles.frameChild}
                  keyboardType="numeric"
                  value={passwordLength.toString()}
                  onChangeText={(text) => setPasswordLength(parseInt(text))}
                  onBlur={blur}
                />
              </View>
              <View style={styles.includeLowerCaseLettersParent}>
                <Text style={[styles.includeLowerCase, styles.includeTypo]}>
                  Include lower case letters
                </Text>
                <CheckBox
                  value={includeLowerCase}
                  onValueChange={() => setIncludeLowerCase(!includeLowerCase)}
                  center
                  checked={includeLowerCase}
                  onPress={() => setIncludeLowerCase(!includeLowerCase)}
                  iconRight
                  iconType="material"
                  checkedColor="red"
                  containerStyle={{ padding: 0, marginLeft: 19 }} // Để loại bỏ khoảng cách xung quanh CheckBox
                  uncheckedIcon={
                    <Image
                      source={require("../assets/box.png")}
                      style={{ width: 25, height: 25 }} // Cấu hình kích thước hình ảnh
                    />
                  }
                  checkedIcon={
                    <Image
                      source={require("../assets/checkbox.png")}
                      style={{ width: 25, height: 25 }} // Cấu hình kích thước hình ảnh
                    />
                  }
                />
              </View>
              <View style={styles.includeLowerCaseLettersParent}>
                <Text style={[styles.includeUpcaseLetters, styles.includeTypo]}>
                  Include upcase letters
                </Text>
                <CheckBox
                  value={includeUpperCase}
                  onValueChange={() => setIncludeUpperCase(!includeUpperCase)}
                  center
                  checked={includeUpperCase}
                  onPress={() => setIncludeUpperCase(!includeUpperCase)}
                  iconRight
                  iconType="material"
                  checkedColor="red"
                  containerStyle={{ padding: 0, marginLeft: 60 }} // Để loại bỏ khoảng cách xung quanh CheckBox
                  uncheckedIcon={
                    <Image
                      source={require("../assets/box.png")}
                      style={{ width: 25, height: 25 }} // Cấu hình kích thước hình ảnh
                    />
                  }
                  checkedIcon={
                    <Image
                      source={require("../assets/checkbox.png")}
                      style={{ width: 25, height: 25 }} // Cấu hình kích thước hình ảnh
                    />
                  }
                />
                <View style={[styles.frameItem, styles.frameLayout]} />
              </View>
              <View style={styles.includeLowerCaseLettersParent}>
                <Text style={[styles.includeNumber, styles.includeTypo]}>
                  Include number
                </Text>
                <CheckBox
                  value={includeNumbers}
                  onValueChange={() => setIncludeNumbers(!includeNumbers)}
                  center
                  checked={includeNumbers}
                  onPress={() => setIncludeNumbers(!includeNumbers)}
                  iconRight
                  iconType="material"
                  checkedColor="red"
                  containerStyle={{ padding: 0, marginLeft: 106 }} // Để loại bỏ khoảng cách xung quanh CheckBox
                  uncheckedIcon={
                    <Image
                      source={require("../assets/box.png")}
                      style={{ width: 25, height: 25 }} // Cấu hình kích thước hình ảnh
                    />
                  }
                  checkedIcon={
                    <Image
                      source={require("../assets/checkbox.png")}
                      style={{ width: 25, height: 25 }} // Cấu hình kích thước hình ảnh
                    />
                  }
                />
                <View style={[styles.rectangleContainer, styles.frameLayout]}>
                  <View style={[styles.groupChild, styles.frameLayout]} />
                </View>
              </View>
              <View style={styles.includeLowerCaseLettersParent}>
                <Text style={[styles.includeSpecialSymbol, styles.includeTypo]}>
                  Include special symbol
                </Text>

                <CheckBox
                  value={includeSpecialSymbols}
                  onValueChange={() =>
                    setIncludeSpecialSymbols(!includeSpecialSymbols)
                  }
                  center
                  checked={includeSpecialSymbols}
                  onPress={() =>
                    setIncludeSpecialSymbols(!includeSpecialSymbols)
                  }
                  iconRight
                  iconType="material"
                  checkedColor="red"
                  containerStyle={{ padding: 0, marginLeft: 53 }} // Để loại bỏ khoảng cách xung quanh CheckBox
                  uncheckedIcon={
                    <Image
                      source={require("../assets/box.png")}
                      style={{ width: 25, height: 25 }} // Cấu hình kích thước hình ảnh
                    />
                  }
                  checkedIcon={
                    <Image
                      source={require("../assets/checkbox.png")}
                      style={{ width: 25, height: 25 }} // Cấu hình kích thước hình ảnh
                    />
                  }
                />
              </View>
            </View>
          </View>
          <View style={[styles.txtpasswordParent, styles.txtpasswordPosition]}>
            <View style={[styles.txtpassword, styles.txtpasswordPosition]} />
            <Text style={[styles.pass, styles.passFlexBox, styles.password]}>
              {password}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
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
  password: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: 18,
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
  groupChild: {
    height: 25,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleWrapper: {
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
  frameItem: {
    marginLeft: 60,
    height: 25,
    backgroundColor: Color.colorWhite,
  },
  includeNumber: {
    width: 160,
    height: 25,
  },
  rectangleContainer: {
    marginLeft: 106,
    height: 25,
  },
  includeSpecialSymbol: {
    width: 213,
    height: 31,
  },
  frameInner: {
    marginLeft: 53,
    height: 25,
    backgroundColor: Color.colorWhite,
  },
  frameParent: {
    marginLeft: -145.5,
    top: 230,
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
  },
  c: {
    flex: 1,
    width: screenWidth,
    overflow: "hidden",
    height: screenHeight,
    backgroundColor: Color.colorWhite,
  },
});

export default GeneratePasswordScreen;
