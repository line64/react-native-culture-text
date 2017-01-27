
export function getBestMessageTranslation(translations, culture, messageKey) {

  if (!messageKey || !culture || !translations) return null;

  let lang;

  if (translations[culture])
    lang = translations[culture];
  else if (translations[getLangFromLocale(culture)])
    lang = translations[getLangFromLocale(culture)];
  else 
    return null;

  return lang[messageKey];
}

export function mergeTranslations(baseTranslations, overrideTranslations) {

  return {
    ...baseTranslations,
    ...overrideTranslations,
  };

}

function getLangFromLocale(locale) {
  let re = /^[A-Za-z]{2}/,
  result = re.exec(locale);
  return result[0];  
};

