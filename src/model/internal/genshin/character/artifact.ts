import { Equip } from "../../../external/genshin/avatar-info/equip";
import { Stat } from "./stat";

export class Artifact {
  public setName: string = "";
  public level: number = 0;
  public rarity: number = 0;
  public mainStat: Stat | undefined;
  public subStats: Stat[];

  constructor(
    equip: Equip,
    translator: (key: string) => string = (key) => key,
  ) {
    if (equip.reliquary) {
      this.setName = translator(
        equip.flat.setNameTextMapHash ? equip.flat.setNameTextMapHash : "",
      );
      this.level = equip.reliquary.level - 1;
      this.rarity = equip.flat.rankLevel;

      if (equip.flat.reliquaryMainstat) {
        this.mainStat = new Stat(equip.flat.reliquaryMainstat, translator);
      }

      this.subStats = new Array<Stat>();
      if (equip.flat.reliquarySubstats) {
        for (const stat of equip.flat.reliquarySubstats) {
          this.subStats.push(new Stat(stat, translator));
        }
      }
    } else {
      this.subStats = new Array<Stat>();
    }
  }
}
