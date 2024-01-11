import { AvatarInfo as AvatarInfoExternal } from "../../../external/genshin/avatar-info";
import { Artifact } from "./artifact";
import { Weapon } from "./weapon";

export class Character {
  public name: string = "";
  public level: number = 0;
  public ascension: number = 0;
  public constellation: number = 0;

  public weapon: Weapon | undefined;

  public artifacts: Array<Artifact> = new Array<Artifact>();

  constructor(
    info: AvatarInfoExternal,
    translator: (key: string) => string = (key) => key,
  ) {
    this.name = translator(info.avatarId.toString());
    this.level = info.propMap["4001"] ? parseInt(info.propMap["4001"].val) : 0;
    this.ascension = info.propMap["4001"]
      ? parseInt(info.propMap["4001"].val)
      : 0;
    this.constellation = info.talentIdList ? info.talentIdList.length : 0;

    for (const equip of info.equipList) {
      if (equip.flat.itemType === "ITEM_WEAPON") {
        this.weapon = new Weapon(equip, translator);
      }

      if (equip.flat.itemType === "ITEM_RELIQUARY") {
        this.artifacts.push(new Artifact(equip, translator));
      }
    }
  }
}
