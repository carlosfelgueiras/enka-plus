import { z } from "zod";

export const resumedAvatarInfoSchema = z.object({
  avatarId: z.number().min(0),
  level: z.number().min(1).max(90),
});

export type ResumedAvatarInfo = z.infer<typeof resumedAvatarInfoSchema>;
