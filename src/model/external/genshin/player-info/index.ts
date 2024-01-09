import { z } from "zod";
import { resumedAvatarInfoSchema } from "./resumed-avatar";

export const profilePictureSchema = z.object({
  avatarId: z.number().min(0).optional(),
  id: z.number().min(0).optional(),
});

export type ProfilePicture = z.infer<typeof profilePictureSchema>;

export const playerInfoSchema = z.object({
  nickname: z.string(),
  level: z.number().min(1).max(60),
  signature: z.string().optional(),
  worldLevel: z.number().min(0).max(8),
  nameCardId: z.number().min(0),
  finishAchievementNum: z.number().min(0),
  towerFloorIndex: z.number().min(0).max(12),
  towerLevelIndex: z.number().min(0).max(3),
  showAvatarInfoList: z.array(resumedAvatarInfoSchema).max(8),
  showNameCardIdList: z.array(z.number().min(0)).max(9),
  profilePicture: profilePictureSchema,
});

export type PlayerInfo = z.infer<typeof playerInfoSchema>;
