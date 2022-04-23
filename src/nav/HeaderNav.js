import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import UploadPostScreen from '../screens/UploadPostScreen';
import FinalizePostScreen from '../screens/FinalizePostScreen';

const Stack = createNativeStackNavigator();

function HeaderNav() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Upload Post" 
          component={UploadPostScreen}
        />
        <Stack.Screen 
          name="Finalize Post" 
          component={FinalizePostScreen}
        />
      </Stack.Navigator>
  );
}

export default HeaderNav;