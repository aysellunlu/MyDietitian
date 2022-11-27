import { View, Text, StyleSheet, SafeAreaView, TextInput, Pressable} from "react-native";
import React from "react";

const BodyMassIndex = () => {
  const [length, setLength] = React.useState(null);
  const [weight, setWeight] = React.useState(null);
  return (
    <View style={styles.containerPage}>
      <View>
        <Text style={styles.textHeader}>Vücut Kitle İndeksi</Text>
      </View>
      <View>
        <Text style={styles.textParagraph}>
          İnsanın kilosunun boyuna göre normal olup olmadığının anlaşılması için
          kullanılır. Elde edilen değerle insanın kendisi için sağlıklı ve ideal
          kiloya ne kadar yakın olduğunu gösterir.
        </Text>
      </View>
      <View>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={setLength}
            value={length}
            placeholder="Boyunuzu giriniz"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Kilonuzu giriniz"
            keyboardType="numeric"
          />
 <Pressable>
          <Text style={styles.button}>Hesapla</Text>
        </Pressable>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default BodyMassIndex;

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
    color: "gray",
    fontSize: 12,
    marginTop: 20,
  },
  styleImage: {
    width: 350,
    height: 200,
    marginTop: 20,
  },
  input: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  button:{
    backgroundColor: 'white',
    color: 'green',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 270,
    padding: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
  }
});
