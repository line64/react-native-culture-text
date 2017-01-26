
export function getBestMessageTranslation(translations, culture, messageKey) {

  if (!messageKey || !culture || !translations) return null;

  let lang = translations[getLangFromLocale(culture)];

  if (!lang) return null;

  return lang[messageKey];

}

export function mergeTranslations(baseTranslations, overrideTranslations) {

  return {
    ...baseTranslations,
    ...overrideTranslations,
  };

}

function getLangFromLocale(locale) {

  if(/^(?:[a-z]{2})(?:(_|-)[A-Z]{2})?$/.test(locale)) {
    return locale.substring(0,2);
  };
  return null;
  
};

