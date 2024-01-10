import { z } from "zod";

export const propSchema = z.object({
  type: z.number(),
  val: z.string().optional().default("0"),
});

export type Prop = z.infer<typeof propSchema>;
