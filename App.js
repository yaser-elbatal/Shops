/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore, store } from './src/store';
import { RootNavigation } from './src/navigations'

const App = () => {

  const backgroundStyle =
    { flex: 1, };

  return (

    <Provider store={store}>
      <StatusBar />
      <PersistGate persistor={persistedStore}>
        <SafeAreaView style={backgroundStyle}>
          <RootNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};


export default App;
