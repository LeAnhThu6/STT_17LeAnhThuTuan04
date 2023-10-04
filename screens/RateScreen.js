import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RateScreen = () => {
  return (
    <View style={styles.b}>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={[styles.starParent, styles.parentPosition]}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/star.png")}
          />
        </View>
        <Text style={[styles.ccKHi, styles.ccKHiTypo]}>Cực kỳ hài lòng</Text>
        <View style={styles.rectangleParent}>
          <View style={styles.rectangleView} />
          <Text style={styles.gi}>Gửi</Text>
        </View>
        <View style={[styles.hyChiSNhngIuMBnTParent, styles.groupChildLayout]}>
          <Text style={[styles.hyChiS, styles.hyChiSTypo]}>
            Hãy chi sẻ những điều mà bạn thích về sản phẩm
          </Text>
          <View style={[styles.groupChild, styles.groupBorder]} />
        </View>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.thmHnhNhParent, styles.cameraIconLayout]}>
              <Text style={[styles.thmHnhNh, styles.ccKHiTypo]}>
                Thêm hình ảnh
              </Text>
              <Image
                style={[styles.cameraIcon, styles.cameraIconLayout]}
                contentFit="cover"
                source={require("../assets/camera.png")}
              />
            </View>
          </View>
        </View>
        <View
          style={[styles.usbBluetoothMusicReceiverHParent, styles.usbPosition]}
        >
          <Text style={[styles.usbBluetoothMusic, styles.hyChiSTypo]}>
            USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
            bluetooth
          </Text>
          <Image
            style={[styles.usbIcon, styles.usbPosition]}
            contentFit="cover"
            source={require("../assets/usb.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    position: "absolute",
    left: "50%",
  },
  frameLayout: {
    height: 39,
    width: 39,
  },
  ccKHiTypo: {
    height: 21,
    width: 259,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupChildLayout: {
    height: 222,
    width: 293,
    position: "absolute",
  },
  hyChiSTypo: {
    textAlign: "left",
    height: 21,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupBorder: {
    backgroundColor: Color.colorSilver_200,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  groupLayout: {
    height: 68,
    width: 293,
    position: "absolute",
  },
  cameraIconLayout: {
    height: 32,
    position: "absolute",
  },
  usbPosition: {
    height: 70,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameItem: {
    marginLeft: 14,
  },
  starParent: {
    marginLeft: -125.5,
    top: 170,
    flexDirection: "row",
    left: "50%",
  },
  ccKHi: {
    marginLeft: -129.5,
    top: 131,
    left: "50%",
  },
  rectangleView: {
    backgroundColor: "#0d5db6",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    borderColor: Color.colorMediumblue,
    left: 0,
    top: 0,
    height: 41,
    width: 289,
    position: "absolute",
  },
  gi: {
    marginTop: -15.5,
    marginLeft: -110.5,
    top: "50%",
    fontSize: 20,
    color: Color.colorWhite,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 222,
    height: 31,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -144.5,
    top: 569,
    height: 41,
    width: 289,
    left: "50%",
    position: "absolute",
  },
  hyChiS: {
    marginLeft: -122.5,
    top: 11,
    color: Color.colorSilver_100,
    width: 246,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    left: "50%",
  },
  groupChild: {
    borderColor: Color.colorSilver_100,
    height: 222,
    width: 293,
    position: "absolute",
  },
  hyChiSNhngIuMBnTParent: {
    marginLeft: -146.5,
    top: 322,
    left: "50%",
  },
  groupItem: {
    backgroundColor: Color.colorSilver_200,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    borderColor: Color.colorMediumblue,
    height: 68,
  },
  thmHnhNh: {
    top: 7,
    left: 0,
  },
  cameraIcon: {
    left: 20,
    top: 0,
    width: 39,
    height: 32,
    overflow: "hidden",
  },
  thmHnhNhParent: {
    top: 18,
    left: 17,
    width: 259,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 239,
    left: 23,
  },
  usbBluetoothMusic: {
    top: 6,
    left: 80,
    fontSize: 16,
    width: 259,
    color: Color.colorBlack,
    textAlign: "left",
  },
  usbIcon: {
    width: 70,
    overflow: "hidden",
  },
  usbBluetoothMusicReceiverHParent: {
    width: 339,
  },
  frameParent: {
    marginLeft: -169,
    top: 15,
    height: 610,
    width: 339,
    left: "50%",
  },
  b: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default RateScreen;
