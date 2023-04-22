import React from "react";
import {Text, Platform} from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import RestaurantsScreen from "../screens/restaurant-screen.screen";
// restaurants details screen component
import { RestaurantsDetailsScreen } from "../screens/restaurants-details.screen";

const Stack = createStackNavigator();

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
            component={RestaurantsDetailsScreen} 
          />
        </Stack.Navigator>
      );
}