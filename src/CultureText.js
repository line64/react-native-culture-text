import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { mergeTranslations, getBestMessageTranslation } from "./utils";

const CultureText = (props, context) => {
  let {
    messageKey,
    translations: propsTranslatios,
    locale: propsLocale,
    ...otherProps
  } = props;

  let { translations: contextTranslations, locale: contextLocale } = context;

  let translations = mergeTranslations(contextTranslations, propsTranslatios);

  let locale = propsLocale || contextLocale;

  let translated = getBestMessageTranslation(translations, locale, messageKey);

  return <Text {...otherProps}>{translated || props.children}</Text>;
};

CultureText.contextTypes = {
  locale: PropTypes.string,
  translations: PropTypes.object
};

export default CultureText;
