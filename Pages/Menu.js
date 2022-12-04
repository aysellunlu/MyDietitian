import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import React from "react";

const Menu = () => {
  return (
    <View style={styles.containerPage}>
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
          <Text style={styles.text}>CANLI KANLI DİYETİSYEN :D</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Menu;

const styles = StyleSheet.create({
  containerPage: {
    backgroundColor: "white",
    paddingTop: 35,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  containerInWindow: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 30,
    borderColor: "green",
  },
  text: {
    color: "green",
    fontWeight: "bold",
    fontSize: 14,
  },
});
