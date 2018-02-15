export function getBestMessageTranslation(translations, locale, messageKey) {
  if (!messageKey || !locale || !translations) return null;

  let lang;

  if (translations[locale]) lang = translations[locale];
  else if (translations[getLangFromLocale(locale)])
    lang = translations[getLangFromLocale(locale)];
  else return null;

  return lang[messageKey];
}

export function mergeTranslations(baseTranslations, overrideTranslations) {
  return {
    ...baseTranslations,
    ...overrideTranslations
  };
}

function getLangFromLocale(locale) {
  let re = /^[A-Za-z]{2}/,
    result = re.exec(locale);
  return result[0];
}
