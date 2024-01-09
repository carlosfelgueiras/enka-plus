import { z } from "zod";

export const fightPropIdSchema = z.string().regex(/^\d+$/);

export const fightPropMapScema = z.record(
  fightPropIdSchema,
  z.number().optional().default(0),
);

export type FightPropMap = z.infer<typeof fightPropMapScema>;
