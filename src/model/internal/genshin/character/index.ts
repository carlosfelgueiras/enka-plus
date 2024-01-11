import { AvatarInfo as AvatarInfoExternal } from "../../../external/genshin/avatar-info";

export class Character {
  public name: string;
  public level: number;
  public ascension: number;
  public constellation: number;

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
  }
}
