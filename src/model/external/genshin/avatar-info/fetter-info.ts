import { z } from "zod";

export const fetterInfoSchema = z.object({
  expLevel: z.number().min(0).max(10),
});

export type FetterInfo = z.infer<typeof fetterInfoSchema>;
