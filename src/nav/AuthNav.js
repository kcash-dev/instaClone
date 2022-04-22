import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

function AuthNav() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login Screen" component={LoginScreen} />
        <Stack.Screen name="Sign Up Screen" component={SignUpScreen} />
      </Stack.Navigator>
  );
}

export default AuthNav;