import { test, expect } from "vitest";
import { resumedAvatarInfoSchema } from "src/model/external/genshin/player-info/resumed-avatar";

test("standard behaviour parsing", () => {
  const input = {
    avatarId: 100001,
    level: 85,
  };

  const parsed = resumedAvatarInfoSchema.parse(input);

  expect(parsed).toEqual(input);
});

test("parsing objects with more properties", () => {
  const input = {
    avatarId: 100001,
    level: 85,
    extra: "extra",
  };

  const expected = {
    avatarId: 100001,
    level: 85,
  };

  const parsed = resumedAvatarInfoSchema.parse(input);

  expect(parsed).toEqual(expected);
});

test("parsing failure with lack of arguments", () => {
  const input = {
    avatarId: 100001,
  };

  expect(() => resumedAvatarInfoSchema.parse(input)).toThrow();
});

test("parsing failure with invalid types", () => {
  const input1 = {
    avatarId: "100001",
    level: 85,
  };

  expect(() => resumedAvatarInfoSchema.parse(input1)).toThrow();

  const input2 = {
    avatarId: 100001,
    level: "85",
  };

  expect(() => resumedAvatarInfoSchema.parse(input2)).toThrow();
});
