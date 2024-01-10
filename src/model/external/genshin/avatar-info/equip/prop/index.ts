import { z } from "zod";
import { propIdSchema } from "./prop-id";

export const propSchema = z
  .object({
    mainPropId: propIdSchema.optional(),
    appendPropId: propIdSchema.optional(),

    statValue: z.number().min(0),
  })
  .refine(
    (data) =>
      (data.mainPropId === undefined && data.appendPropId !== undefined) ||
      (data.mainPropId !== undefined && data.appendPropId === undefined),
  );

export type Prop = z.infer<typeof propSchema>;
