import { z } from "zod";

export const propIdSchema = z.enum([
  "FIGHT_PROP_BASE_ATTACK",
  "FIGHT_PROP_HP",
  "FIGHT_PROP_ATTACK",
  "FIGHT_PROP_DEFENSE",
  "FIGHT_PROP_HP_PERCENT",
  "FIGHT_PROP_ATTACK_PERCENT",
  "FIGHT_PROP_DEFENSE_PERCENT",
  "FIGHT_PROP_CRITICAL",
  "FIGHT_PROP_CRITICAL_HURT",
  "FIGHT_PROP_CHARGE_EFFICIENCY",
  "FIGHT_PROP_HEAL_ADD",
  "FIGHT_PROP_ELEMENT_MASTERY",
  "FIGHT_PROP_PHYSICAL_ADD_HURT",
  "FIGHT_PROP_FIRE_ADD_HURT",
  "FIGHT_PROP_ELEC_ADD_HURT",
  "FIGHT_PROP_WATER_ADD_HURT",
  "FIGHT_PROP_WIND_ADD_HURT",
  "FIGHT_PROP_ICE_ADD_HURT",
  "FIGHT_PROP_ROCK_ADD_HURT",
  "FIGHT_PROP_GRASS_ADD_HURT",
]);

export type PropId = z.infer<typeof propIdSchema>;

export const appendPropSchema = z.object({
  appendPropId: propIdSchema,
  statValue: z.number().min(0),
});

export type AppendProp = z.infer<typeof appendPropSchema>;

export const mainPropSchema = z.object({
  mainPropId: propIdSchema,
  statValue: z.number().min(0),
});

export type MainProp = z.infer<typeof mainPropSchema>;
