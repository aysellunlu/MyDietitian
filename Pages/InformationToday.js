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

const InformationToday = () => {
  return (
    <ScrollView style={styles.containerPage}>
      <ImageBackground
        source={BackgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.containerOutWindow}>
          <View>
            <Text style={styles.textHeader}>Günün Bilgisi</Text>
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
              Dengeli Beslenmenin Önemi
            </Text>
            <Text style={styles.textParagraph}>
              Beslenme; büyüme, yaşamın sürdürülmesi ve sağlığın korunması için
              besinlerin kullanılmasıdır. Beslenme yetersizliği ve dengesizliği;
              bazı hastalıkların oluşmasında doğrudan, bazılarında ise dolaylı
              nedendir. Bu yüzden beslenme sadece hastalık oluşması durumunda
              dikkat edilecek bir kavram olarak görülmemeli, daha sağlıklı olmak
              ve hastalıklardan korunmak, sakatlıkları ve erken ölümleri
              azaltmak açısından önemli olduğu unutulmamalıdır.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default InformationToday;

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
    marginTop: 20,
    lineHeight: 25,
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
