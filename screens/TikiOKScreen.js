import * as React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { Button } from "@rneui/themed";
import { Image } from "expo-image";
import { Padding, Color, FontFamily, FontSize } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TikiOkScreen = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  return (
    <View style={styles.tikiOkScreen}>
      <View style={[styles.backgroundParent, styles.parentPosition]}>
        <View style={styles.background} />
        <View
          style={[styles.backGroundTienhanhdathangParent, styles.backPosition]}
        >
          <View
            style={[styles.backGroundTienhanhdathang, styles.backPosition]}
          />
          <Button
            title="TIẾN HÀNH ĐẶT HÀNG"
            type="solid"
            color="#e53935"
            titleStyle={styles.frameButtonBtn}
            containerStyle={styles.frameButtonBtn1}
            buttonStyle={styles.frameButtonBtn2}
            onPress={() => navigate("LoginScreen")}
          />
          <View style={[styles.thnhTinParent, styles.frameParentSpaceBlock]}>
            <Text style={[styles.thnhTin, styles.text2Typo]}>Thành tiền</Text>
            <Text style={[styles.text, styles.textTypo]}>141.800 đ</Text>
          </View>
        </View>
        <View style={[styles.frameParent, styles.parentPosition]}>
          <View>
            <View style={styles.backgroundLayout}>
              <View
                style={[styles.backgroundFragAbove, styles.backgroundLayout]}
              />
              <View style={styles.frameContainer}>
                <View style={styles.frameParentSpaceBlock}>
                  <View style={[styles.bookParent, styles.parentSpaceBlock]}>
                    <Image
                      style={styles.bookIcon}
                      contentFit="cover"
                      source={require("../assets/book.png")}
                    />
                    <View style={styles.nguynHmTchPhnVNgDParent}>
                      <Text style={[styles.nguynHmTch, styles.cungCpBiTypo]}>
                        Nguyên hàm tích phân và ứng dụng
                      </Text>
                      <Text style={[styles.cungCpBi, styles.cungCpBiTypo]}>
                        Cung cấp bởi Tiki Trading
                      </Text>
                      <Text style={[styles.text1, styles.textTypo]}>
                        141.800 đ
                      </Text>
                      <View style={styles.frameWrapper}>
                        <View style={styles.parent}>
                          <Text style={[styles.text2, styles.text2Typo]}>
                            141.800 đ
                          </Text>
                          <View
                            style={[styles.frameChild, styles.framePosition]}
                          />
                        </View>
                      </View>
                      <View style={[styles.frameParent1, styles.framePosition]}>
                        <View
                          style={[styles.groupParent, styles.parentSpaceBlock]}
                        >
                          <Pressable
                            style={[styles.groupPressable, styles.groupLayout]}
                          >
                            <Image
                              style={[styles.groupChild, styles.groupLayout]}
                              contentFit="cover"
                              source={require("../assets/frame-32.png")}
                            />
                          </Pressable>
                          <View style={styles.wrapper}>
                            <Text style={styles.text3}>1</Text>
                          </View>
                          <Pressable
                            style={[styles.groupPressable, styles.groupLayout]}
                          >
                            <Image
                              style={[styles.groupChild, styles.groupLayout]}
                              contentFit="cover"
                              source={require("../assets/frame-30.png")}
                            />
                          </Pressable>
                        </View>
                        <Button
                          title="Mua sau"
                          type="clear"
                          color="#134fec"
                          titleStyle={styles.muaSauBtn}
                          containerStyle={styles.muaSauBtn1}
                          buttonStyle={styles.muaSauBtn2}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.mGimGiLuParent,
                      styles.frameParentSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.mGimGi, styles.gimTypo]}>
                      Mã giảm giá đã lưu
                    </Text>
                    <Button
                      style={styles.xemTiY}
                      title="Xem tại đây"
                      type="clear"
                      color="#134fec"
                      titleStyle={styles.xemTiYBtn}
                      containerStyle={styles.xemTiYBtn1}
                      buttonStyle={styles.xemTiYBtn2}
                    />
                  </View>
                </View>
                <View
                  style={[styles.frameParent2, styles.frameParentSpaceBlock]}
                >
                  <View style={styles.btnloginLayout}>
                    <View style={[styles.btnlogin, styles.btnloginLayout]} />
                    <View style={styles.yellowBlockParent}>
                      <View style={styles.yellowBlock} />
                      <Text style={[styles.mGimGi1, styles.gimTypo]}>
                        Mã giảm giá
                      </Text>
                    </View>
                  </View>
                  <Button
                    style={styles.frameItem}
                    title="Áp dụng"
                    type="solid"
                    color="#0a5eb7"
                    titleStyle={styles.frameButton1Btn}
                    containerStyle={styles.frameButton1Btn1}
                    buttonStyle={styles.frameButton1Btn2}
                    onPress={() => navigate("RateScreen")}
                  />
                </View>
              </View>
            </View>
            <View
              style={[styles.backGroundNhaptaidayParent, styles.backLayout]}
            >
              <View style={[styles.backGroundNhaptaiday, styles.backLayout]} />
              <View
                style={[
                  styles.bnCPhiuQuTngTikigotParent,
                  styles.frameParentSpaceBlock,
                ]}
              >
                <Text style={[styles.bnCPhiu, styles.tmTnhTypo]}>
                  Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
                </Text>
                <Button
                  style={styles.nhpTiY}
                  title="Nhập tại đây?"
                  type="clear"
                  color="#134fec"
                  titleStyle={styles.nhpTiYBtn}
                  containerStyle={styles.nhpTiYBtn1}
                  buttonStyle={styles.nhpTiYBtn2}
                />
              </View>
            </View>
          </View>
          <View style={[styles.backGroundNhaptaidayParent, styles.backLayout]}>
            <View style={[styles.backGroundNhaptaiday, styles.backLayout]} />
            <View style={[styles.tmTnhParent, styles.frameParentSpaceBlock]}>
              <Text style={[styles.tmTnh, styles.tmTnhTypo]}>Tạm tính</Text>
              <Text style={[styles.text4, styles.textTypo]}>141.800 đ</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameButtonBtn: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
  },
  frameButtonBtn1: {
    left: "50%",
    marginLeft: -165.58,
    marginTop: -2,
    top: "50%",
    position: "absolute",
  },
  frameButtonBtn2: {
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 61,
    paddingVertical: 11,
  },
  muaSauBtn: {
    color: "#134fec",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
  },
  muaSauBtn1: {
    position: "relative",
  },
  muaSauBtn2: {},
  xemTiYBtn: {
    color: "#134fec",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
  },
  xemTiYBtn1: {
    position: "relative",
  },
  xemTiYBtn2: {},
  frameButton1Btn: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
  },
  frameButton1Btn1: {
    position: "relative",
  },
  frameButton1Btn2: {
    borderRadius: 2,
    width: 99,
    height: 45,
  },
  nhpTiYBtn: {
    color: "#134fec",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
  },
  nhpTiYBtn1: {
    position: "relative",
  },
  nhpTiYBtn2: {},
  parentPosition: {
    left: 0,
    position: "absolute",
  },
  backPosition: {
    height: 120,
    bottom: 0,
    width: screenWidth,
    left: 0,
    position: "absolute",
  },
  frameParentSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
  },
  text2Typo: {
    textAlign: "center",
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  textTypo: {
    color: Color.colorRed,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  backgroundLayout: {
    height: 283,
    width: screenWidth,
  },
  parentSpaceBlock: {
    paddingHorizontal: 0,
    flexDirection: "row",
  },
  cungCpBiTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  framePosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupLayout: {
    width: 16,
    height: 16,
  },
  gimTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    alignItems: "center",
  },
  btnloginLayout: {
    height: 45,
    width: 208,
  },
  backLayout: {
    height: 51,
    width: screenWidth,
  },
  tmTnhTypo: {
    color: Color.colorGray_200,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  background: {
    backgroundColor: "#c4c4c4",
    zIndex: 0,
    width: screenWidth,
    height: screenHeight,
  },
  backGroundTienhanhdathang: {
    backgroundColor: Color.colorWhite,
  },
  thnhTin: {
    width: 89,
    fontSize: FontSize.size_lg,
  },
  text: {
    fontSize: 20,
    marginLeft: 147,
  },
  thnhTinParent: {
    bottom: 83,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: screenWidth,
    left: 0,
    position: "absolute",
  },
  backGroundTienhanhdathangParent: {
    zIndex: 1,
  },
  backgroundFragAbove: {
    zIndex: 0,
    left: 0,
    position: "absolute",
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  bookIcon: {
    width: 104,
    height: 129,
  },
  nguynHmTch: {
    zIndex: 0,
  },
  cungCpBi: {
    marginTop: 12,
    zIndex: 1,
  },
  text1: {
    marginTop: 12,
    zIndex: 2,
    fontSize: FontSize.size_lg,
  },
  text2: {
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
    top: 0,
  },
  frameChild: {
    marginTop: 1,
    marginLeft: -27.5,
    backgroundColor: Color.colorGray_100,
    height: 1,
    width: 56,
  },
  parent: {
    height: 14,
    width: 56,
  },
  frameWrapper: {
    alignItems: "flex-end",
    zIndex: 3,
    marginTop: 12,
    width: 199,
    flexDirection: "row",
  },
  groupChild: {
    height: 16,
    left: 0,
    position: "absolute",
    top: 0,
  },
  groupPressable: {
    height: 16,
  },
  text3: {
    fontSize: 15,
    display: "flex",
    height: 15,
    width: 9,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapper: {
    height: 15,
    width: 9,
  },
  groupParent: {
    width: 82,
    paddingVertical: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  frameParent1: {
    marginTop: 61.5,
    marginLeft: -99.5,
    zIndex: 4,
    width: 199,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nguynHmTchPhnVNgDParent: {
    marginLeft: 25,
    width: 199,
  },
  bookParent: {
    paddingVertical: Padding.p_base,
    justifyContent: "center",
  },
  mGimGi: {
    width: 114,
    fontSize: FontSize.size_xs,
  },
  xemTiY: {
    marginLeft: 16,
  },
  mGimGiLuParent: {
    width: 328,
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    left: screenWidth / 2 - 164,
  },
  btnlogin: {
    borderRadius: 2,
    backgroundColor: "rgba(229, 57, 53, 0)",
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    left: 0,
    position: "absolute",
    top: 0,
  },
  yellowBlock: {
    top: 3,
    left: 13,
    backgroundColor: "#f2dd1b",
    width: 32,
    height: 16,
    position: "absolute",
  },
  mGimGi1: {
    left: 54,
    width: 134,
    fontSize: FontSize.size_lg,
    top: 0,
    position: "absolute",
  },
  yellowBlockParent: {
    marginTop: -10.5,
    marginLeft: -104,
    height: 21,
    width: 208,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameItem: {
    marginLeft: 21,
  },
  frameParent2: {
    marginTop: 28,
    justifyContent: "center",
    flexDirection: "row",
  },
  frameContainer: {
    marginTop: 10,
    zIndex: 1,
  },
  backGroundNhaptaiday: {
    left: 0,
    position: "absolute",
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  bnCPhiu: {
    fontSize: FontSize.size_xs,
  },
  nhpTiY: {
    marginLeft: 32,
  },
  bnCPhiuQuTngTikigotParent: {
    top: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: screenWidth,
    left: 0,
    position: "absolute",
  },
  backGroundNhaptaidayParent: {
    marginTop: 20,
  },
  tmTnh: {
    fontSize: FontSize.size_lg,
  },
  text4: {
    marginLeft: 159,
    fontSize: FontSize.size_lg,
  },
  tmTnhParent: {
    top: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: screenWidth,
    left: 0,
    position: "absolute",
  },
  frameParent: {
    width: 359,
    zIndex: 2,
    top: 0,
  },
  backgroundParent: {
    justifyContent: "space-between",
    width: screenWidth,
    top: 0,
    height: screenHeight,
  },
  tikiOkScreen: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: screenHeight,
    backgroundColor: Color.colorWhite,
  },
});

export default TikiOkScreen;
