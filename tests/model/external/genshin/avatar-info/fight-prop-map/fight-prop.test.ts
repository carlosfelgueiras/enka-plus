import { test, expect } from "vitest";
import { fightPropSchema } from "src/model/external/genshin/avatar-info/fight-prop-map/fight-prop";

test("standard behaviour parsing", () => {
  const data = 101;

  const result = fightPropSchema.parse(data);

  expect(result).toEqual(data);
});

test("missing value", () => {
  const data = undefined;

  const result = fightPropSchema.parse(data);

  expect(result).toEqual(0);
});
