import { propIdSchema } from "../../../../../../../src/model/external/genshin/avatar-info/equip/prop/prop-id";

test("valid value", () => {
  const propId = propIdSchema.parse("FIGHT_PROP_BASE_ATTACK");
  expect(propId).toBe("FIGHT_PROP_BASE_ATTACK");
});

test("invalid value", () => {
  expect(() => propIdSchema.parse("INVALID")).toThrow();
});

test("undefined value", () => {
  expect(() => propIdSchema.parse(undefined)).toThrow();
});
