import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const HeaderAccount = () => {
  return (
    <View>
      <Pressable>
        <Text style={styles.text}>
          Hoş geldin
          <Text style={styles.textBold}>{""} Aysel</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default HeaderAccount;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    paddingTop: 60,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  text: {
    color: "yellow",
    fontSize: 12,
  },
  textBold: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
