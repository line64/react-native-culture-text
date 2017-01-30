import 'react-native';
import React from 'react';
import { View } from 'react-native';
import { CultureContext, TextInput } from '../';

import renderer from 'react-test-renderer';

const translations = {
  es: {
    name_placeholder: 'Escriba su nombre',
  },
}

it('render translated message', () => {
  const tree = renderer.create(
    <CultureContext translations={translations} locale="es">
      <View>
        <TextInput messageKey="name_placeholder" placeholder="Type your name" />
      </View>
    </CultureContext>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
