import { z } from "zod";

export const equipTypeSchema = z.enum([
  "EQUIP_BRACER",
  "EQUIP_NECKLACE",
  "EQUIP_SHOES",
  "EQUIP_RING",
  "EQUIP_DRESS",
]);

export type EquipType = z.infer<typeof equipTypeSchema>;
