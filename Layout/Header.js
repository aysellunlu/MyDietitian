import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderAccount from "../Components/HeaderAccount";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diyetisyenim</Text>
      <HeaderAccount />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    paddingTop: 60,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
