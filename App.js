import React from 'react';
import { ThemeProvider } from 'styled-components';

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
      <RestaurantsScreen/>
    </ThemeProvider>
    
  );
}

export default App;