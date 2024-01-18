import { test, expect } from "vitest";
import { weaponSchema } from "src/model/external/genshin/avatar-info/equip/weapon";

test("standard behaviour parsing", () => {
  const data = {
    level: 80,
    promoteLevel: 6,
    affixMap: {
      "12031": 100,
      "12302": 100,
    },
  };

  expect(weaponSchema.parse(data)).toEqual(data);
});
