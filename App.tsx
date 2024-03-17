import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {toastConfig} from './src/utils';
import Toast from 'react-native-toast-message';
import {RootNavigator} from './src/navigation';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <Toast config={toastConfig} />
    </Provider>
  );
}

export default App;
