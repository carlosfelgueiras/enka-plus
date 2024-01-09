import { z } from 'zod';
import { weaponSchema } from './weapon';
import { reliquarySchema } from './reliquary';

export const equipSchema = z.union([weaponSchema, reliquarySchema]);

export type Equip = z.infer<typeof equipSchema>;