import React from "react";
import { Text, View } from "react-native";

// scrrens for ach side of our app
import RestaurantsScreen from '../screens/restaurant-screen.screen';

// icons for nav-bar
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

// import for nav-bar
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// restaurants navigation component
import { RestaurantsNavigation } from "./restaurants-navigation.navigation";

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
      <View>
        <Text>Home!</Text>
      </View>
    );
  }
  
function SettingsScreen() {
    return (
        <View>
        <Text>Settings!</Text>
        </View>
    );
}

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {

              const { name } = route;

              switch(name) {
                case 'Restaurants':
                  focused ? color = 'tomato' : color = 'gray';
                  return <Ionicons name="restaurant-outline" size={24} color={color} />
                case 'Map':
                  focused ? color = 'tomato' : color = 'gray';
                  return <Feather name="map" size={24} color={color} />
                case 'Settings':
                  focused ? color = 'tomato' : color = 'gray';
                  return <Feather name="settings" size={24} color={color} />
                default:
                  return;
              }
            },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsNavigation} />
              <Tab.Screen name="Map" component={HomeScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}