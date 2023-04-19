import React from 'react';
import {View, Text} from 'react-native';
import styled, { ThemeProvider } from 'styled-components';

// scrrens for ach side of our app
import RestaurantsScreen from './src/features/screens/restaurant-screen.screen';

// gloabl theme
import {theme} from './src/infrastructure/theme/index';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';

// import for nav-bar
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icons for nav-bar
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

// redux provider'
import { Provider } from 'react-redux';
// redux store
import {store} from './src/data/redux/store';

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded) return;

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Container>
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
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={HomeScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </Container>
      </Provider>
    </ThemeProvider>
    
  );
}

export default App;