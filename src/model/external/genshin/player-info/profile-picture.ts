import { z } from "zod";

export const profilePictureSchema = z
  .object({
    avatarId: z.number().min(0),
    id: z.number().min(0),
  })
  .partial()
  .refine(
    (data) =>
      (data.avatarId !== undefined && data.id === undefined) ||
      (data.avatarId === undefined && data.id !== undefined),
  );

export type ProfilePicture = z.infer<typeof profilePictureSchema>;
