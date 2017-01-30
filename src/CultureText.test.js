import 'react-native';
import React from 'react';
import { View } from 'react-native';
import { CultureContext, Text } from '../';

import renderer from 'react-test-renderer';

const translations = {
  es: {
    welcome: 'Este texto depende de la cultura seleccionada',
  },
}

it('render translated message', () => {
  const tree = renderer.create(
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
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
