
export function getBestMessageTranslation(translations, culture, messageKey) {

  if (!messageKey || !culture || !translations) return null;

  let lang = translations[_localeFallback(culture)];

  if (!lang) return null;

  return lang[messageKey];

}

export function mergeTranslations(baseTranslations, overrideTranslations) {

  return {
    ...baseTranslations,
    ...overrideTranslations,
  };

}

function _localeFallback(locale) {

  if (locale.indexOf('-') !== -1)
      locale = locale.split('-')[0];

  if (locale.indexOf('_') !== -1)
      locale = locale.split('_')[0];
  
  return locale;

};