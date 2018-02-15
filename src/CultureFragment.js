import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import { mergeTranslations, getBestMessageTranslation } from "./utils";

const CultureFragment = (props, context) => {
  const {
    translations: propsTranslatios,
    locale: propsLocale,
    children,
    ...otherProps
  } = props;

  if (!children) return null;

  const { translations: contextTranslations, locale: contextLocale } = context;

  const translations = mergeTranslations(contextTranslations, propsTranslatios);

  const locale = propsLocale || contextLocale;

  const translate = messageKey =>
    getBestMessageTranslation(translations, locale, messageKey);

  return children(translate);
};

CultureFragment.contextTypes = {
  locale: PropTypes.string,
  translations: PropTypes.object
};

CultureFragment.propTypes = {
  children: PropTypes.func
};

export default CultureFragment;
