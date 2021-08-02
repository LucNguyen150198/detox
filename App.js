/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {View} from 'react-native';
import React from 'react';
import {LoginScreen} from '@screens';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <LoginScreen />
    </View>
  );
};

export default App;
