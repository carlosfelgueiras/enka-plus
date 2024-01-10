import { z } from "zod";
import { propSchema } from "./prop";

export const weaponSchema = z.object({
  itemId: z.number().min(0),
  weapon: z.object({
    level: z.number().min(1).max(90),
    promoteLevel: z.number().min(1).max(6),
    affixMap: z.record(z.string().min(5), z.number()),
  }),
  flat: z.object({
    nameTextMapHash: z.string().min(1),
    rankLevel: z.number().min(1).max(5),
    itemType: z.literal("ITEM_WEAPON"),
    icon: z.string().min(1),
    weaponStats: z.array(propSchema).min(1).max(2),
  }),
});

export type Weapon = z.infer<typeof weaponSchema>;
