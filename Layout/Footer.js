import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.containerFooter}>
      <Text>Footer</Text>
    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
  containerFooter: {
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
