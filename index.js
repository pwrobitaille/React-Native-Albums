import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header'

const App = () => {
  return (
    <Header title={"Albums"}/>
  );
};

AppRegistry.registerComponent('albums', () => App);
