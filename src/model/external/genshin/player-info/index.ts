import { z } from "zod";
import { resumedAvatarInfoSchema } from "./resumed-avatar";
import { profilePictureSchema } from "./profile-picture";

export const playerInfoSchema = z.object({
  nickname: z.string(),
  level: z.number().min(1).max(60),
  signature: z.string().optional(),
  worldLevel: z.number().min(0).max(8).optional(),
  nameCardId: z.number().min(0),
  finishAchievementNum: z.number().min(0),
  towerFloorIndex: z.number().min(0).max(12).optional(),
  towerLevelIndex: z.number().min(0).max(3).optional(),
  showAvatarInfoList: z.array(resumedAvatarInfoSchema).max(8).optional(),
  showNameCardIdList: z.array(z.number().min(0)).max(9).optional(),
  profilePicture: profilePictureSchema,
});

export type PlayerInfo = z.infer<typeof playerInfoSchema>;
