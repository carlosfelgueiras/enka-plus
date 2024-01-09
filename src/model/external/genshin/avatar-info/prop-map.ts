import { z } from 'zod';
import { propSchema } from './prop';

export const propIdSchema = z.enum(["1001", "1002", "1003", "1004", "4001", "10010", "10049"]);

export type PropId = z.infer<typeof propIdSchema>;

export const propMapSchema = z.record(propIdSchema, propSchema);

export type PropMap = z.infer<typeof propMapSchema>;