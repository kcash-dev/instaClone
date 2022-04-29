import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import CommentsScreen from '../screens/CommentsScreen';

const Stack = createNativeStackNavigator();

function ProfileNav() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Comments" 
          component={ CommentsScreen }
        />
      </Stack.Navigator>
  );
}

export default ProfileNav;