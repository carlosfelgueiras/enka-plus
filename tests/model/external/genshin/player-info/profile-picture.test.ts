import { profilePictureSchema } from "../../../../../src/model/external/genshin/player-info/profile-picture";

test("standard behaviour parsing", () => {
  const input = {
    avatarId: 100001,
  };

  const parsed = profilePictureSchema.parse(input);

  expect(parsed).toEqual(input);

  const input2 = {
    id: 100001,
  };

  const parsed2 = profilePictureSchema.parse(input2);

  expect(parsed2).toEqual(input2);
});

test("fail to parse when both avatarId and id are present", () => {
  const input = {
    avatarId: 100001,
    id: 100001,
  };

  expect(() => profilePictureSchema.parse(input)).toThrow();
});

test("fail to parse when neither avatarId nor id are present", () => {
  const input = {};

  expect(() => profilePictureSchema.parse(input)).toThrow();
});
