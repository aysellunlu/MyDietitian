import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'

const Water = () => {
  return (
    <ScrollView style={styles.containerPage}>
       <View>
        <Text style={styles.textHeader}>Suyun Önemi</Text>
      </View>
      <View>
        <Text style={styles.textParagraph}>
        Su, canlıların hayatını sürdürmesi için gerekli olan 
        ve bu sebeple hayati önem taşıyan, dünya üzerindeki 
        en mucizevi maddedir. Fiziksel olarak incelendiğinde, 
        kokusuz, renksiz ve tatsızdır. Suyun canlılar üzerindeki 
        özellikle de insan yaşamındaki önemi çok büyüktür.
        </Text>
      </View>
      <View>
        <Image
          style={styles.styleImage}
          source={{
            uri: "https://cdn.shopify.com/s/files/1/0405/8215/2352/files/water_1024x1024.png?v=1607425189",
          }}
        />
      </View>
      <View>
        <Text style={styles.textParagraph}>
        İnsan vücudu büyük oranda sudan oluşmaktadır. 
        Vücudumuzdaki su oranı yasam sürecimiz boyunca 
        değişim göstermektedir. Yeni doğan bir bebekte vücut 
        ağırlığının %75’i sudan oluşmakta iken bu oran çocuklarda %70, 
        yetişkinlerde %60 ve yaşlılarda %50 şeklindedir. 
        Yetişkin bir insan, bir kısmı yiyeceklerden karşılanmak 
        üzere günde 2-3 litre suya ihtiyaç duyar.
        </Text>
      </View>
    </ScrollView>
  )
}

export default Water;


const styles = StyleSheet.create({
    containerPage: {
      backgroundColor: "white",
      paddingTop: 35,
      paddingBottom: 15,
      paddingLeft: 20,
      paddingRight: 20,
    },
    textHeader: {
      color: "green",
      fontWeight: "bold",
      fontSize: 18,
    },
    textParagraph: {
      color: "black",
      fontSize: 14,
      marginTop: 20,
      lineHeight: 25,
    },
    styleImage: {
      width: 350,
      height: 200,
      marginTop: 20,
    },
  });
  