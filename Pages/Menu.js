import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import BackgroundImage from "../images/bgmainwhite.png";

const Menu = () => {
  return (
    <View style={styles.containerPage}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.containerOutWindow}>
          <View style={styles.containerInWindow}>
            <Pressable>
              <Text style={styles.text}>Motivasyon ve Beslenmenin Önemi</Text>
            </Pressable>
          </View>
          <View style={styles.containerInWindow}>
            <Pressable>
              <Text style={styles.text}>Vücut Kitle İndeksi</Text>
            </Pressable>
          </View>
          <View style={styles.containerInWindow}>
            <Pressable>
              <Text style={styles.text}>Besinler ve Değerleri</Text>
            </Pressable>
          </View>
          <View style={styles.containerInWindow}>
            <Pressable>
              <Text style={styles.text}>Günün Menüsü</Text>
            </Pressable>
          </View>
          <View style={styles.containerInWindow}>
            <Pressable>
              <Text style={styles.text}>Günün Bilgisi</Text>
            </Pressable>
          </View>
          <View style={styles.containerInWindow}>
            <Pressable>
              <Text style={styles.text}>Suyun Önemi</Text>
            </Pressable>
          </View>
          <View style={styles.containerInWindow}>
            <Pressable>
              <Text style={styles.text}>KANLI CANLI DİYETİSYEN :D</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Menu;

const styles = StyleSheet.create({
  containerPage: {
    // backgroundColor: "white",
    // paddingTop: 10,
    // paddingBottom: 15,
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  containerInWindow: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    borderColor: "#B7FF1F",
  },
  containerOutWindow: {
    borderRadius: 10,
    paddingTop: 50,
    paddingBottom: 70,
    paddingLeft: 35,
    paddingRight: 35,
  },
  text: {
    color: "green",
    fontWeight: "bold",
    fontSize: 14,
  },
});
