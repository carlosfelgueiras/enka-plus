import { z } from "zod";

export const fightPropSchema = z.number().optional().default(0);

export type FightProp = z.infer<typeof fightPropSchema>;
