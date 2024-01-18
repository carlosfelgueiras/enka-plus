import { test, expect } from "vitest";
import { propSchema } from "src/model/external/genshin/avatar-info/prop-map/prop";

test("standard behaviour parsing", () => {
  const data = {
    type: 1,
    val: "2",
  };

  const result = propSchema.parse(data);

  expect(result).toEqual(data);
});

test("parsing without value", () => {
  const data = {
    type: 1,
  };

  const expected = {
    type: 1,
    val: "0",
  };

  const result = propSchema.parse(data);

  expect(result).toEqual(expected);
});

test("parsing without type", () => {
  const dataNoType = {
    val: "2",
  };

  expect(() => propSchema.parse(dataNoType)).toThrow();

  const dataEmpty = {};

  expect(() => propSchema.parse(dataEmpty)).toThrow();
});
