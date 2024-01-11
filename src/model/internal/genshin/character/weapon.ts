import { Equip } from "../../../external/genshin/avatar-info/equip";
import { Stat } from "./stat";

export class Weapon {
  public name: string = "";
  public level: number = 0;
  public ascension: number = 0;
  public refinement: number = 1;

  public mainStat: Stat | undefined;
  public subStat: Stat | undefined;

  constructor(
    equipSchema: Equip,
    translator: (key: string) => string = (key) => key,
  ) {
    this.name = translator(equipSchema.flat.nameTextMapHash);

    if (equipSchema.weapon) {
      this.level = equipSchema.weapon.level;
      this.ascension = equipSchema.weapon.promoteLevel;
      this.refinement = equipSchema.weapon.affixMap.length;

      for (const key in equipSchema.weapon.affixMap) {
        this.refinement = equipSchema.weapon.affixMap[key] + 1;
      }

      if (equipSchema.flat.weaponStats) {
        this.mainStat = new Stat(equipSchema.flat.weaponStats[0], translator);
        this.subStat = new Stat(equipSchema.flat.weaponStats[1], translator);
      }
    }
  }
}
