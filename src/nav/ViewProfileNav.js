import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import ViewPostScreen from '../screens/ViewPostScreen';
import ViewProfileScreen from '../screens/ViewProfileScreen';

const Stack = createNativeStackNavigator();

function ViewProfileNav() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
            name="View Profile"
            component={ ViewProfileScreen }
        />
        <Stack.Screen 
          name="View Post" 
          component={ ViewPostScreen }
        />
      </Stack.Navigator>
  );
}

export default ViewProfileNav;