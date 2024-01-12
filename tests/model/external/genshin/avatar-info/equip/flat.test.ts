import { test, expect } from "vitest";
import { flatSchema } from "../../../../../../src/model/external/genshin/avatar-info/equip/flat";

test("default parsing behaviour for weapon", () => {
  const data = {
    nameTextMapHash: "312321",
    rankLevel: 5,
    itemType: "ITEM_WEAPON",
    icon: "test",

    weaponStats: [
      {
        mainPropId: "FIGHT_PROP_BASE_ATTACK",
        statValue: 100,
      },
      {
        appendPropId: "FIGHT_PROP_CRITICAL",
        statValue: 100,
      },
    ],
  };

  expect(flatSchema.parse(data)).toEqual(data);
});

test("default parsing behaviour for reliquary", () => {
  const data = {
    nameTextMapHash: "312321",
    rankLevel: 5,
    itemType: "ITEM_RELIQUARY",
    icon: "test",

    equipType: "EQUIP_BRACER",
    setNameTextMapHash: "123123",
    reliquarySubstats: [
      {
        appendPropId: "FIGHT_PROP_BASE_ATTACK",
        statValue: 100,
      },
      {
        appendPropId: "FIGHT_PROP_CRITICAL",
        statValue: 100,
      },
    ],
    reliquaryMainstat: {
      mainPropId: "FIGHT_PROP_BASE_ATTACK",
      statValue: 100,
    },
  };

  expect(flatSchema.parse(data)).toEqual(data);
});

test("lack of weaponStats for weapon", () => {
  const data = {
    nameTextMapHash: "312321",
    rankLevel: 5,
    itemType: "ITEM_WEAPON",
    icon: "test",
  };

  expect(() => flatSchema.parse(data)).toThrow();
});

test("lack of props for reliquary", () => {
  const data = {
    nameTextMapHash: "312321",
    rankLevel: 5,
    itemType: "ITEM_RELIQUARY",
    icon: "test",
  };

  expect(() => flatSchema.parse(data)).toThrow();
});

test("both properties", () => {
  const data = {
    nameTextMapHash: "312321",
    rankLevel: 5,
    itemType: "ITEM_RELIQUARY",
    icon: "test",

    weaponStats: [
      {
        mainPropId: "FIGHT_PROP_BASE_ATTACK",
        statValue: 100,
      },
      {
        appendPropId: "FIGHT_PROP_CRITICAL",
        statValue: 100,
      },
    ],

    equipType: "EQUIP_BRACER",
    setNameTextMapHash: "123123",
    reliquarySubstats: [
      {
        appendPropId: "FIGHT_PROP_BASE_ATTACK",
        statValue: 100,
      },
      {
        appendPropId: "FIGHT_PROP_CRITICAL",
        statValue: 100,
      },
    ],
    reliquaryMainstat: {
      mainPropId: "FIGHT_PROP_BASE_ATTACK",
      statValue: 100,
    },
  };

  expect(() => flatSchema.parse(data)).toThrow();
});
