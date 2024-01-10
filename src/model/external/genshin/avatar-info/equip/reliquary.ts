import { z } from "zod";
import { propSchema } from "./prop";

export const reliquarySchema = z.object({
  itemId: z.number().min(0),
  reliquary: z.object({
    level: z.number().min(1).max(21),
    mainPropId: z.number().min(0),
    appendPropIdList: z.array(z.number().min(0)),
  }),
  flat: z.object({
    nameTextMapHash: z.string().min(1),
    rankLevel: z.number().min(1).max(5),
    itemType: z.literal("ITEM_RELIQUARY"),
    icon: z.string().min(1),
    equipType: z.enum([
      "EQUIP_BRACER",
      "EQUIP_NECKLACE",
      "EQUIP_SHOES",
      "EQUIP_RING",
      "EQUIP_DRESS",
    ]),
    setNameTextMapHash: z.string().min(1),
    reliquarySubstats: z.array(propSchema).min(1).max(4),
    reliquaryMainstat: propSchema,
  }),
});

export type Reliquary = z.infer<typeof reliquarySchema>;
