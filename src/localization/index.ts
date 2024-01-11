const url =
  "https://raw.githubusercontent.com/EnkaNetwork/API-docs/master/store/loc.json";
const characterUrl =
  "https://raw.githubusercontent.com/EnkaNetwork/API-docs/master/store/characters.json";

const characterDictionary = await (await fetch(characterUrl)).json();
const translationDictionary = await (await fetch(url)).json();

export function translate(key: string, lang: string = "en") {
  if (!characterDictionary[key]) {
    const translation = translationDictionary[lang][key];

    if (!translation) {
      return "";
    }

    return translation;
  }

  return translate(characterDictionary[key]["NameTextMapHash"], lang);
}
