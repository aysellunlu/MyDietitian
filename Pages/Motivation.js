import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import BackgroundImage from "../images/bgmainwhite.png";

const Motivation = () => {
  return (
    <ScrollView style={styles.containerPage}>
      <View>
        <ImageBackground
          source={BackgroundImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.containerOutWindow}>
            <View>
              <Text style={styles.textHeader}>
                Motivasyon ve Beslenmenin Önemi
              </Text>
              <Text style={styles.textParagraph}>
                Beslenme; büyüme, yaşamın sürdürülmesi ve sağlığın korunması
                için besinlerin kullanılmasıdır. Beslenme yetersizliği ve
                dengesizliği; bazı hastalıkların oluşmasında doğrudan,
                bazılarında ise dolaylı nedendir. Bu yüzden beslenme sadece
                hastalık oluşması durumunda dikkat edilecek bir kavram olarak
                görülmemeli, daha sağlıklı olmak ve hastalıklardan korunmak,
                sakatlıkları ve erken ölümleri azaltmak açısından önemli olduğu
                unutulmamalıdır.
              </Text>
            </View>
            <View>
              <Image
                style={styles.styleImage}
                source={{
                  uri: "https://www.lidertipmerkezi.com.tr/wp-content/uploads/2020/11/DIYETISYEN-HIZMETI.jpg",
                }}
              />
            </View>
            <View>
              <Text style={styles.textParagraph}>
                Beslenme; büyüme, yaşamın sürdürülmesi ve sağlığın korunması
                için besinlerin kullanılmasıdır. Beslenme yetersizliği ve
                dengesizliği; bazı hastalıkların oluşmasında doğrudan,
                bazılarında ise dolaylı nedendir. Bu yüzden beslenme sadece
                hastalık oluşması durumunda dikkat edilecek bir kavram olarak
                görülmemeli, daha sağlıklı olmak ve hastalıklardan korunmak,
                sakatlıkları ve erken ölümleri azaltmak açısından önemli olduğu
                unutulmamalıdır.
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Motivation;

const styles = StyleSheet.create({
  containerPage: {
    // paddingTop: 35,
    // paddingBottom: 15,
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  textHeader: {
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
  textParagraph: {
    color: "#103E00",
    fontSize: 14,
    marginTop: 20,
    lineHeight: 25,
  },
  styleImage: {
    width: 350,
    height: 200,
    marginTop: 20,
  },
  containerOutWindow: {
    borderRadius: 10,
    paddingTop: 50,
    paddingBottom: 70,
    paddingLeft: 25,
    paddingRight: 25,
    borderColor: "#8FFF1F",
  },
});
