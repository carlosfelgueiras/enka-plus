import { test, expect } from "vitest";
import { translate } from "../../src/localization/index";

test("standard behaviour id translation", () => {
  const input = {
    weaponID: 933442195,
    lang: "en"
  };

  const output = {
    weaponName: "\"Ultimate Overlord's Mega Magic Sword\""
  }

  const translated = translate(input.weaponID.toString(),input.lang);

  expect(translated).toEqual(output.weaponName);

  const input2 = {
    characterID: 10000002,
    lang: "pt"
  };

  const output2 = {
    characterName: "Kamisato Ayaka"
  }

  const translated2 = translate(input2.characterID.toString(),input2.lang);

  expect(translated2).toEqual(output2.characterName);
});

test("every language available", () => {
  const input = {
    weaponID: 20848859,
    langEN: "en",
    langRU: "ru",
    langVI: "vi",
    langTH: "th",
    langPT: "pt",
    langKO: "ko",
    langJA: "ja",
    langID: "id",
    langFR: "fr",
    langES: "es",
    langDE: "de",
    langTW: "zh-TW",
    langCN: "zh-CN",
    langIT: "it",
    langTR: "tr",
  };

  const output = {
    langEN: "Blackcliff Slasher",
    langRU: "Черногорская бритва",
    langVI: "Hắc Nham Trảm Đao",
    langTH: "Blackcliff Slasher",
    langPT: "Foice do Penhasco Obscuro",
    langKO: "흑암참도",
    langJA: "黒岩の斬刀",
    langID: "Blackcliff Slasher",
    langFR: "Trancheuse de Rochenoire",
    langES: "Gran Hoja del Peñasco Oscuro",
    langDE: "Schwarzstein-Schneide",
    langTW: "黑岩斬刀",
    langCN: "黑岩斩刀",
    langIT: "Grande lama di Rupenera",
    langTR: "Kara Kaya Kılıcı",
  };

  let translated = translate(input.weaponID.toString(),input.langEN);
  expect(translated).toEqual(output.langEN);

  translated = translate(input.weaponID.toString(),input.langRU);
  expect(translated).toEqual(output.langRU);

  translated = translate(input.weaponID.toString(),input.langVI);
  expect(translated).toEqual(output.langVI);

  translated = translate(input.weaponID.toString(),input.langTH);
  expect(translated).toEqual(output.langTH);

  translated = translate(input.weaponID.toString(),input.langPT);
  expect(translated).toEqual(output.langPT);

  translated = translate(input.weaponID.toString(),input.langKO);
  expect(translated).toEqual(output.langKO);

  translated = translate(input.weaponID.toString(),input.langJA);
  expect(translated).toEqual(output.langJA);

  translated = translate(input.weaponID.toString(),input.langID);
  expect(translated).toEqual(output.langID);

  translated = translate(input.weaponID.toString(),input.langFR);
  expect(translated).toEqual(output.langFR);

  translated = translate(input.weaponID.toString(),input.langES);
  expect(translated).toEqual(output.langES);

  translated = translate(input.weaponID.toString(),input.langDE);
  expect(translated).toEqual(output.langDE);

  translated = translate(input.weaponID.toString(),input.langTW);
  expect(translated).toEqual(output.langTW);

  translated = translate(input.weaponID.toString(),input.langCN);
  expect(translated).toEqual(output.langCN);

  translated = translate(input.weaponID.toString(),input.langIT);
  expect(translated).toEqual(output.langIT);

  translated = translate(input.weaponID.toString(),input.langTR);
  expect(translated).toEqual(output.langTR);
});

test("wrong language given", () => {
  const input = {
    weaponID: 20848859,
    lang1: "",
    lang2: "unknown",
    lang3: "br"
  };

  expect(() => translate(input.weaponID.toString(),input.lang1)).toThrowError();

  expect(() => translate(input.weaponID.toString(),input.lang2)).toThrowError();

  expect(() => translate(input.weaponID.toString(),input.lang3)).toThrowError();
})

test("display percentage on stat", () => {
  const input = {
    statID1: "FIGHT_PROP_ATTACK",
    statID2: "FIGHT_PROP_ATTACK_PERCENT",
    langEN: "en"
  };

  const output = {
    statTXT1: "ATK",
    statTXT2: "ATK%",
  }

  let translated = translate(input.statID1.toString(),input.langEN);
  expect(translated).toEqual(output.statTXT1);

  translated = translate(input.statID2.toString(),input.langEN);
  expect(translated).toEqual(output.statTXT2);
});
