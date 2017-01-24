import React from 'react';
import { Text } from 'react-native';
import { mergeTranslations, getBestMessageTranslation } from './utils';

const CultureText = (props, context) => {

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

  let translated = getBestMessageTranslation(translations, culture, messageKey);

  return (<Text {...otherProps}>{translated || props.children}</Text>);

};

CultureText.contextTypes = {
  culture: React.PropTypes.string,
  translations: React.PropTypes.object,
};

export default CultureText;
