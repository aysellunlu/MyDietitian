import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Layout/Header';
import Menu from './Pages/Menu';
import Motivation from './Pages/Motivation';

export default function App() {
  return (
    <View>
      <Header/>
      {/* <Menu/> */}
      <Motivation/>
      <StatusBar style="auto"/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
