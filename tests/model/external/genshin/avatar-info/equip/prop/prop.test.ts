import { test, expect } from "vitest";
import { propSchema } from "../../../../../../../src/model/external/genshin/avatar-info/equip/prop";

test("standard behaviour parsing", () => {
  const dataMain = {
    mainPropId: "FIGHT_PROP_BASE_ATTACK",
    statValue: 100,
  };

  const resultMain = propSchema.parse(dataMain);

  expect(resultMain).toEqual(dataMain);

  const dataAppend = {
    appendPropId: "FIGHT_PROP_HP_PERCENT",
    statValue: 100,
  };

  const resultAppend = propSchema.parse(dataAppend);

  expect(resultAppend).toEqual(dataAppend);
});

test("lack of propId", () => {
  const data = {
    statValue: 100,
  };

  expect(() => propSchema.parse(data)).toThrow();
});

test("both values for propId", () => {
  const data = {
    mainPropId: "FIGHT_PROP_BASE_ATTACK",
    appendPropId: "FIGHT_PROP_BASE_ATTACK",
    statValue: 100,
  };

  expect(() => propSchema.parse(data)).toThrow();
});
