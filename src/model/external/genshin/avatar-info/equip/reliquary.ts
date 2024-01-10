import { z } from "zod";

export const reliquarySchema = z.object({
  level: z.number().min(1).max(21),
  mainPropId: z.number().min(0),
  appendPropIdList: z.array(z.number().min(0)),
});

export type Reliquary = z.infer<typeof reliquarySchema>;
