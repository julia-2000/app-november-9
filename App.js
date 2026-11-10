import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from './navigation/MainNavigator';
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
};

function Main() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
