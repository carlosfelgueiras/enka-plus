import { z } from "zod";
import { playerInfoSchema } from "./player-info";
import { avatarInfoSchema } from "./avatar-info";

export const genshinProfileSchema = z.object({
  playerInfo: playerInfoSchema,
  avatarInfoList: z.array(avatarInfoSchema).max(8),
  ttl: z.number().min(0),
  uid: z.string().min(9).max(9),
});

export type GenshinProfile = z.infer<typeof genshinProfileSchema>;
