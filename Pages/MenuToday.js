import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    ImageBackground,
  } from "react-native";
  import React from "react";
  import BackgroundImage from "../images/bgmainwhite.png";
  
  const MenuToday = () => {
    return (
      <ScrollView style={styles.containerPage}>
        <ImageBackground
          source={BackgroundImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.containerOutWindow}>
            <View>
              <Text style={styles.textHeader}>Günün Menüsü</Text>
            </View>
            <View>
              <Image
                style={styles.styleImage}
                source={{
                  uri: "https://www.lidertipmerkezi.com.tr/wp-content/uploads/2020/11/DIYETISYEN-HIZMETI.jpg",
                }}
              />
            </View>
            <View style={styles.containerWindow}>
              <Text style={styles.textHeaderSmall}>
                Brokoli Sosunda Dana Rosto
              </Text>
              <Text style={styles.textParagraph}>
                - Brokoli 
              </Text>
              <Text style={styles.textParagraph}>
                - Zeytinyağı 
              </Text>
              <Text style={styles.textParagraph}>
                - Pul biber
              </Text>
              <Text style={styles.textParagraph}>
                - Bir büyük dana xd
              </Text>
              <Text style={styles.textParagraph}>
                - Süt
              </Text>
              <Text style={styles.textParagraph}>
              Lorem Ipsum is simply dummy text of the printing 
              and typesetting industry. Lorem Ipsum has been the 
              industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled 
              it to make a type specimen book. It has survived not only 
              five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s 
              with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker 
              including versions of Lorem Ipsum
              </Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  };
  
  export default MenuToday;
  
  const styles = StyleSheet.create({
    containerPage: {
      // backgroundColor: "white",
      // paddingTop: 35,
      // paddingBottom: 15,
      // paddingLeft: 20,
      // paddingRight: 20,
    },
    containerWindow: {
      paddingTop: 20,
    },
    textHeader: {
      color: "green",
      fontWeight: "bold",
      fontSize: 18,
    },
    textHeaderSmall: {
      color: "green",
      fontWeight: "bold",
      fontSize: 16,
    },
    textParagraph: {
      color: "black",
      fontSize: 14,
      marginTop: 10,
      lineHeight: 20,
    },
    styleImage: {
      width: 320,
      height: 200,
      marginTop: 20,
    },
    containerOutWindow: {
      borderRadius: 10,
      paddingTop: 50,
      paddingBottom: 150,
      paddingLeft: 30,
      paddingRight: 30,
      borderColor: "#8FFF1F",
    },
  });
  