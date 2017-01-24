# React Native - Culture Text
A higher order component of Text to provide i18n features in a react-friendly way

```
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import {
  CultureContext,
  Text
} from 'react-native-culture-text';

export default class example extends Component {
  render() {
    return (
      <CultureContext translations={translations} culture="es">
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text messageKey="welcome" style={styles.instructions}>
            This text depends on the selected culture
          </Text>
        </View>
      </CultureContext>
    );
  }
}

const translations = {
  en: {
    welcome: 'This text depends on the selected culture',
  },
  es: {
    welcome: 'Este texto depende de la cultura seleccionada',
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

```
