import { z } from "zod";

export const itemTypeSchema = z.enum(["ITEM_WEAPON", "ITEM_RELIQUARY"]);

export type ItemType = z.infer<typeof itemTypeSchema>;
