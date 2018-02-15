# React Native - Culture Text
A higher order component of `<Text/>` to provide i18n features in a react-friendly way

## Motivation
Current i18n libraries implement translations in an app-wide manner. This generates a coupling that works againts component isolation. We need a way in which each component can define their owns translations, in a standalone manner. This is somehow similar to the concept handling local styles instead of having global rules.

## Goals
- dynamically set the content of `<Text/>` elements depending on the context's culture
- message definition and theirs translations live inside each component
- allow translations to be implemented with minimum friction of original code

## Non-goals
- provide a full-blown i18n library
- be able to capture device's culture automatically (use your own mechanism for this)

## Install
```
yarn add react-native-culture-text
```

## Getting Started

1. In your root component, wrap your whole UI with a `<CultureContext locale={'es-AR'} />` to tell all the children in the hierarchy what's the current locale of the user.
2. In each isolated component, wrap your UI with another `<CultureContext translations={myTranslations} />` to tell the component's children where to look for translated messages.
3. Switch your import statements to use the `<Text/>` component that comes with this library instead of the original react-native one.
4. To each `<Text/>` element, add a new attribute `messageKey` that will be used to select which message translation to use.
5. For those places that don't use `<Text/>` component, wrap your UI with a `<CultureFragment/>` component use the `children` render prop that provides a `translate` helper function

## Example with <Text/> component
```
import React, { Component } from 'react';
import {
  View
} from 'react-native';

import {
  CultureContext,
  Text
} from 'react-native-culture-text';

export default class example extends Component {
  render() {
    return (
      <CultureContext translations={translations} locale="es">
        <View>
          <Text>
            Welcome to React Native!
          </Text>
          <Text messageKey="welcome">
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
```

## Example with <CultureFragment/> render prop
```
import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';

import {
  CultureContext,
  CultureFragment
} from 'react-native-culture-text';

export default class example extends Component {
  render() {
    return (
      <CultureContext translations={translations} locale="es">
        <CultureFragment>
          {T => (
            <View>
              <Text>
                Welcome to React Native!
              </Text>
              <TextInput placeholder={T('username')} />
            )}
          </View>
        </CultureFragment>
      </CultureContext>
    );
  }
}

const translations = {
  en: {
    username: 'type your username',
  },
  es: {
    username: 'ingrese su usuario',
  },
}
```
