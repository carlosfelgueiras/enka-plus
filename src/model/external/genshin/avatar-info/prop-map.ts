import { z } from "zod";
import { propSchema } from "./prop";

export const propMapSchema = z
  .object({
    "1001": propSchema,
    "1002": propSchema,
    "4001": propSchema,
  })
  .refine((data) => {
    return (
      data["1001"].type === 1001 &&
      data["1002"].type === 1002 &&
      data["4001"].type === 4001
    );
  });

export type PropMap = z.infer<typeof propMapSchema>;
