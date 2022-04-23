import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen'
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import HeaderRight from '../components/HeaderRight';
import HeaderLeft from '../components/HeaderLeft';
const Tab = createBottomTabNavigator();

function HomeNav() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused
                ? 'home-filled'
                : 'home-filled';
            } else if (route.name === 'Profile') {
              iconName = focused
              ? 'person'
              : 'person';
            } else if (route.name === 'Search') {
              iconName = focused
              ? 'search'
              : 'search';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={38} color={color} />;
          },
          tabBarActiveTintColor: '#C96480',
          tabBarInactiveTintColor: '#000',
        })}
      >
        <Tab.Screen 
          name="Search" 
          component={SearchScreen}
          options={{
            headerLeft: () => <HeaderLeft />,
            headerTitle: '',
            headerRight: () => <HeaderRight />,
            headerTintColor: '#f6f8fa'
          }}
        />
        <Tab.Screen 
          name="Feed" 
          component={HomeScreen} 
          options={{
            headerLeft: () => <HeaderLeft />,
            headerTitle: '',
            headerRight: () => <HeaderRight />
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            headerLeft: () => <HeaderLeft />,
            headerTitle: '',
            headerRight: () => <HeaderRight />
          }}
        />
      </Tab.Navigator>
  );
}

export default HomeNav;