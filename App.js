import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContainer from './src/navigations/DrawerNavigation';
import  { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import  { store } from './src/store'
function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <DrawerContainer />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
   
  );
}

export default App;
