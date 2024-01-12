import { test, expect } from "vitest";
import { propMapSchema } from "../../../../../../src/model/external/genshin/avatar-info/prop-map";

test("standard behaviour parsing", () => {
  const data = {
    "1001": {
      type: 1001,
      val: "2",
    },
    "1002": {
      type: 1002,
      val: "2",
    },
    "4001": {
      type: 4001,
      val: "2",
    },
  };

  const result = propMapSchema.parse(data);

  expect(result).toEqual(data);
});

test("missing properties", () => {
  const prop1001 = {
    type: 1001,
    val: "2",
  };

  const prop1002 = {
    type: 1002,
    val: "2",
  };

  const prop4001 = {
    type: 4001,
    val: "2",
  };

  const dataMissing1001 = {
    "1002": prop1002,
    "4001": prop4001,
  };

  const dataMissing1002 = {
    "1001": prop1001,
    "4001": prop4001,
  };

  const dataMissing4001 = {
    "1001": prop1001,
    "1002": prop1002,
  };

  expect(() => propMapSchema.parse(dataMissing1001)).toThrow();
  expect(() => propMapSchema.parse(dataMissing1002)).toThrow();
  expect(() => propMapSchema.parse(dataMissing4001)).toThrow();
});

test("type mismatch on properties", () => {
  const data = {
    "1001": {
      type: 1001,
      val: "2",
    },
    "1002": {
      type: 1002,
      val: "2",
    },
    "4001": {
      type: 1001,
      val: "2",
    },
  };

  expect(() => propMapSchema.parse(data)).toThrow();
});
