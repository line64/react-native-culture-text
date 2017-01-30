import React from 'react';
import { TextInput } from 'react-native';
import { mergeTranslations, getBestMessageTranslation } from './utils';

const CultureTextInput = (props, context) => {

  let {
    messageKey,
    translations: propsTranslatios,
    locale: propsLocale,
    ...otherProps,
  } = props;

  let {
    translations: contextTranslations,
    locale: contextLocale,
  } = context;

  let translations = mergeTranslations(contextTranslations, propsTranslatios);

  let locale = propsLocale || contextLocale;

  let translatedPlaceholder = getBestMessageTranslation(translations, locale, messageKey);

  return (<TextInput {...otherProps} placeholder={(translatedPlaceholder || otherProps.placeholder)}/>);

};

CultureTextInput.contextTypes = {
  locale: React.PropTypes.string,
  translations: React.PropTypes.object,
};

export default CultureTextInput;
