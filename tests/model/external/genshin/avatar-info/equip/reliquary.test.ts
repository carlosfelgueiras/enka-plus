import { reliquarySchema } from "../../../../../../src/model/external/genshin/avatar-info/equip/reliquary";

test("standard behaviour parsing", () => {
  const data = {
    level: 20,
    mainPropId: 1,
    appendPropIdList: [1, 2, 3, 4],
  };

  expect(reliquarySchema.parse(data)).toEqual(data);
});
