import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import ViewPostScreen from '../screens/ViewPostScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import UploadProfilePicScreen from '../screens/UploadProfilePicScreen';

const Stack = createNativeStackNavigator();

function ProfileNav() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="View Post" 
          component={ ViewPostScreen }
        />
        <Stack.Screen 
          name="Edit Profile" 
          component={ EditProfileScreen }
        />
        <Stack.Screen
          name="Upload Profile Pic"
          component={ UploadProfilePicScreen }
        />
      </Stack.Navigator>
  );
}

export default ProfileNav;