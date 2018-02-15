import "react-native";
import React from "react";
import { View, TextInput } from "react-native";
import { CultureContext, CultureFragment } from "../";

import renderer from "react-test-renderer";

const translations = {
  es: {
    placeholder: "indicio de un campo de texto"
  }
};

it("render translated message", () => {
  const tree = renderer
    .create(
      <CultureContext translations={translations} locale="es">
        <View>
          <CultureFragment
            children={T => (
              <TextInput palceholder={T("placeholder")}/>
            )}
          />
        </View>
      </CultureContext>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
