
export function getBestMessageTranslation(translations, culture, messageKey) {

  if (!messageKey || !culture || !translations) return null;

  //TODO: this is a quick draft, should improve fallback procedure
  let lang = translations[culture];

  if (!lang) return null;

  return lang[messageKey];

}

export function mergeTranslations(baseTranslations, overrideTranslations) {

  return {
    ...baseTranslations,
    ...overrideTranslations,
  };

}
