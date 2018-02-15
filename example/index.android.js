/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, View } from "react-native";

import { CultureContext, Text, TextInput } from "react-native-culture-text";

export default class example extends Component {
  render() {
    return (
      <CultureContext translations={translations} culture="es">
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text messageKey="welcome" style={styles.instructions} />
          <TextInput messageKey="placeholder" style={styles.textInput} />
        </View>
      </CultureContext>
    );
  }
}

const translations = {
  en: {
    welcome: "This text depends on the selected culture",
    placeholder: "Please, enter some text"
  },
  es: {
    welcome: "Este texto depende de la cultura seleccionada",
    placeholder: "Por favor, ingrese un texto"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  textInput: {
    width: 200,
    textAlign: "center"
  }
});

AppRegistry.registerComponent("example", () => example);
