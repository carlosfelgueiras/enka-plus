import { z } from "zod";

export const weaponSchema = z.object({
  level: z.number().min(1).max(90),
  promoteLevel: z.number().min(1).max(6),
  affixMap: z.record(z.string(), z.number()),
});

export type Weapon = z.infer<typeof weaponSchema>;
