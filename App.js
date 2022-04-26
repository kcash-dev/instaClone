import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Navs 
import AuthNav from './src/nav/AuthNav';
import HomeNav from './src/nav/HomeNav';
import HeaderNav from './src/nav/HeaderNav';

import AppLoading from 'expo-app-loading';

//Fonts
import { useFonts, Inter_400Regular, Inter_700Bold, } from '@expo-google-fonts/inter';


const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Pacifico_400Regular': require('./assets/fonts/Pacifico-Regular.ttf'),
    Inter_400Regular,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Authentication" component={AuthNav} />
        <Stack.Screen name="HomeNav" component={HomeNav} />
        <Stack.Screen name="HeaderNav" component={HeaderNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
