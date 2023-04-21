import 'react-native-gesture-handler';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

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

// redux provider'
import { Provider } from 'react-redux';
// redux store
import {store} from './src/data/redux/store';

// app navigation bar
import { AppNavigation } from './src/features/navigation/app-navigation.navigation';

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`

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
          <AppNavigation />
        </Container>
      </Provider>
    </ThemeProvider>
    
  );
}

export default App;