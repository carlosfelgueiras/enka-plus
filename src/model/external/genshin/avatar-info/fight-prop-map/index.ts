import { z } from "zod";
import { fightPropSchema } from "./fight-prop";

export const fightPropMapScema = z.object({
  "1": fightPropSchema, // Base HP
  "2": fightPropSchema, // HP
  "3": fightPropSchema, // HP%

  "4": fightPropSchema, // Base ATK
  "5": fightPropSchema, // ATK
  "6": fightPropSchema, // ATK%

  "7": fightPropSchema, // Base DEF
  "8": fightPropSchema, // DEF
  "9": fightPropSchema, // DEF%

  "20": fightPropSchema, // CRIT Rate
  "22": fightPropSchema, // Crit DMG

  "23": fightPropSchema, // Energy Recharge
  "26": fightPropSchema, // Healing Bonus
  "27": fightPropSchema, // Incoming Healing Bonus
  "28": fightPropSchema, // Elemental Mastery

  "29": fightPropSchema, // Physical RES
  "30": fightPropSchema, // Physical DMG Bonus

  "40": fightPropSchema, // Pyro DMG Bonus
  "41": fightPropSchema, // Electro DMG Bonus
  "42": fightPropSchema, // Hydro DMG Bonus
  "43": fightPropSchema, // Dendro DMG Bonus
  "44": fightPropSchema, // Anemo DMG Bonus
  "45": fightPropSchema, // Geo DMG Bonus
  "46": fightPropSchema, // Cryo DMG Bonus

  "50": fightPropSchema, // Pyro RES
  "51": fightPropSchema, // Electro RES
  "52": fightPropSchema, // Hydro RES
  "53": fightPropSchema, // Dendro RES
  "54": fightPropSchema, // Anemo RES
  "55": fightPropSchema, // Geo RES
  "56": fightPropSchema, // Cryo RES
});

export type FightPropMap = z.infer<typeof fightPropMapScema>;
