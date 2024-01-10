import { z } from "zod";
import { itemTypeSchema } from "./item-type";
import { propSchema } from "./prop";
import { equipTypeSchema } from "./equip-type";

export const flatSchema = z
  .object({
    // Common
    nameTextMapHash: z.string().min(1),
    rankLevel: z.number().min(1).max(5),
    itemType: itemTypeSchema,
    icon: z.string().min(1),

    // Weapon Only
    weaponStats: z.array(propSchema).min(1).max(2).optional(),

    // Reliquary Only
    equipType: equipTypeSchema.optional(),
    setNameTextMapHash: z.string().min(1).optional(),
    reliquarySubstats: z.array(propSchema).min(1).max(4).optional(),
    reliquaryMainstat: propSchema.optional(),
  })
  .refine((data) => {
    if (data.itemType === "ITEM_WEAPON") {
      return (
        data.weaponStats !== undefined &&
        data.equipType === undefined &&
        data.setNameTextMapHash === undefined &&
        data.reliquarySubstats === undefined &&
        data.reliquaryMainstat === undefined
      );
    }

    if (data.itemType === "ITEM_RELIQUARY") {
      return (
        data.weaponStats === undefined &&
        data.equipType !== undefined &&
        data.setNameTextMapHash !== undefined &&
        data.reliquarySubstats !== undefined &&
        data.reliquaryMainstat !== undefined
      );
    }
  });

export type Flat = z.infer<typeof flatSchema>;
