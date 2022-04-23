import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UploadPostScreen from '../screens/UploadPostScreen';

const Stack = createNativeStackNavigator();

function HeaderNav() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Upload Post" component={UploadPostScreen} />
      </Stack.Navigator>
  );
}

export default HeaderNav;