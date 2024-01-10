import { z } from "zod";
import { flatSchema } from "./flat";
import { reliquarySchema } from "./reliquary";
import { weaponSchema } from "./weapon";

export const equipSchema = z
  .object({
    itemId: z.number().min(0),

    reliquary: reliquarySchema.optional(),
    weapon: weaponSchema.optional(),

    flat: flatSchema,
  })
  .refine((data) => {
    if (data.flat.itemType === "ITEM_WEAPON") {
      return data.weapon !== undefined && data.reliquary === undefined;
    }

    if (data.flat.itemType === "ITEM_RELIQUARY") {
      return data.weapon === undefined && data.reliquary !== undefined;
    }
  });

export type Equip = z.infer<typeof equipSchema>;
