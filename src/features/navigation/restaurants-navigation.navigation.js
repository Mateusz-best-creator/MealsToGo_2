import React from "react";
import {Text, Platform} from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RestaurantsScreen from "../screens/restaurant-screen.screen";

const Stack = createStackNavigator();

const RestaurantsDetailScreen = () => {
    return <Text>Czesc</Text>
}

export const RestaurantsNavigation = () => {

    const popUpProperty = Platform.OS === 'android' ? TransitionPresets.FadeFromBottomAndroid  : TransitionPresets.ModalPresentationIOS;

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            ...popUpProperty,
        }}>
          <Stack.Screen 
            name="Restaurants" 
            component={RestaurantsScreen} 
          />
          <Stack.Screen 
            name="RestaurantDetails" 
            component={RestaurantsDetailScreen} 
          />
        </Stack.Navigator>
      );
}