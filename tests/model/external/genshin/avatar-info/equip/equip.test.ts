import { equipSchema } from "../../../../../../src/model/external/genshin/avatar-info/equip";
import { reliquarySchema } from "../../../../../../src/model/external/genshin/avatar-info/equip/reliquary";
import { weaponSchema } from "../../../../../../src/model/external/genshin/avatar-info/equip/weapon";
import { flatSchema } from "../../../../../../src/model/external/genshin/avatar-info/equip/flat";

const reliquaryData = reliquarySchema.parse({
  level: 20,
  mainPropId: 1,
  appendPropIdList: [1, 2, 3, 4],
});

const weaponData = weaponSchema.parse({
  level: 80,
  promoteLevel: 6,
  affixMap: {
    "12031": 100,
    "12302": 100,
  },
});

const reliquaryFlat = flatSchema.parse({
  nameTextMapHash: "test",
  rankLevel: 5,
  itemType: "ITEM_RELIQUARY",
  icon: "test",
  equipType: "EQUIP_SHOES",
  setNameTextMapHash: "test",
  reliquarySubstats: [
    {
      appendPropId: "FIGHT_PROP_ATTACK",
      statValue: 100,
    },
  ],
  reliquaryMainstat: {
    appendPropId: "FIGHT_PROP_ATTACK",
    statValue: 100,
  },
});

const weaponFlat = flatSchema.parse({
  nameTextMapHash: "test",
  rankLevel: 5,
  itemType: "ITEM_WEAPON",
  icon: "test",
  weaponStats: [
    {
      appendPropId: "FIGHT_PROP_ATTACK",
      statValue: 100,
    },
    {
      mainPropId: "FIGHT_PROP_ATTACK",
      statValue: 100,
    },
  ],
});

test("standard behaviour parsing weapon", () => {
  const data = {
    itemId: 1,
    weapon: weaponData,
    flat: weaponFlat,
  };

  expect(equipSchema.parse(data)).toEqual(data);
});

test("standard behaviour parsing reliquary", () => {
  const data = {
    itemId: 1,
    reliquary: reliquaryData,
    flat: reliquaryFlat,
  };

  expect(equipSchema.parse(data)).toEqual(data);
});

test("error with both types", () => {
  const data = {
    itemId: 1,
    reliquary: reliquaryData,
    weapon: weaponData,
    flat: reliquaryFlat,
  };

  expect(() => equipSchema.parse(data)).toThrow();
});

test("error with mixed types", () => {
  const data1 = {
    itemId: 1,
    reliquary: reliquaryData,
    flat: weaponFlat,
  };

  expect(() => equipSchema.parse(data1)).toThrow();

  const data2 = {
    itemId: 1,
    weapon: weaponData,
    flat: reliquaryFlat,
  };

  expect(() => equipSchema.parse(data2)).toThrow();
});

test("error with no types", () => {
  const data1 = {
    itemId: 1,
    flat: reliquaryFlat,
  };

  expect(() => equipSchema.parse(data1)).toThrow();

  const data2 = {
    itemId: 1,
    flat: weaponFlat,
  };

  expect(() => equipSchema.parse(data2)).toThrow();
});
