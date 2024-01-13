import { test, expect } from "vitest";
import { genshinProfileSchema } from "../../../../src/model/external/genshin";

test("standard behavior parsing", () => {
  // TODO: add more tests
});

test("profiles without avatar info are also valid", () => {
  const data = {
    playerInfo: {
      nickname: "test",
      level: 1,
      signature: "test",
      worldLevel: 1,
      nameCardId: 1,
      finishAchievementNum: 1,
      towerFloorIndex: 1,
      towerLevelIndex: 1,
      showNameCardIdList: [123456789],
      showAvatarInfoList: [
        {
          avatarId: 123456789,
          level: 20,
        },
      ],
      profilePicture: {
        id: 123456789,
      },
    },
    ttl: 10,
    uid: "123456789",
  };

  expect(() => genshinProfileSchema.parse(data)).not.toThrow();
});
