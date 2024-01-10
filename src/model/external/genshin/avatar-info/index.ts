import { z } from "zod";
import { propMapSchema } from "./prop-map";
import { fightPropMapScema } from "./fight-prop-map";
import { fetterInfoSchema } from "./fetter-info";
import { equipSchema } from "./equip";

export const avatarInfoSchema = z.object({
  avatarId: z.number().min(0),
  propMap: propMapSchema,
  fightPropMap: fightPropMapScema,
  skillDepotId: z.number().min(0),
  inherentProudSkillList: z.array(z.number().min(0)).max(4),
  skillLevelMap: z.record(z.string().min(5), z.number().min(1).max(15)),
  equipList: z.array(equipSchema).max(6),
  fetterInfo: fetterInfoSchema,
  talentIdList: z.optional(z.array(z.number().min(1)).max(6)),
});

export type AvatarInfo = z.infer<typeof avatarInfoSchema>;
