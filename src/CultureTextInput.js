import React from 'react';
import { TextInput } from 'react-native';
import { mergeTranslations, getBestMessageTranslation } from './utils';

const CultureTextInput = (props, context) => {

  let {
    messageKey,
    translations: propsTranslatios,
    culture: propsCulture,
    ...otherProps,
  } = props;

  let {
    translations: contextTranslations,
    culture: contextCulture,
  } = context;

  let translations = mergeTranslations(contextTranslations, propsTranslatios);

  let culture = propsCulture || contextCulture;

  let translatedPlaceholder = getBestMessageTranslation(translations, culture, messageKey);

  return (<TextInput {...otherProps} placeholder={(translatedPlaceholder || otherProps.placeholder)}/>);

};

CultureTextInput.contextTypes = {
  culture: React.PropTypes.string,
  translations: React.PropTypes.object,
};

export default CultureTextInput;
