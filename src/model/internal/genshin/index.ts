import { GenshinProfile as GenshinProfileExternal } from "../../../model/external/genshin";
import { Character } from "./character";
import { PlayerInfo } from "./player-info";

export class GenshinProfile {
  public ttl: number;
  public uid: string;
  public playerInfo: PlayerInfo;
  public characterInfo: Array<Character>;

  constructor(
    profile: GenshinProfileExternal,
    translator: (key: string) => string = (key) => key,
  ) {
    this.ttl = profile.ttl;
    this.uid = profile.uid;

    this.playerInfo = new PlayerInfo(profile.playerInfo);

    this.characterInfo = new Array<Character>();

    if (profile.avatarInfoList) {
      profile.avatarInfoList.forEach((avatarInfo) => {
        this.characterInfo.push(new Character(avatarInfo, translator));
      });
    }
  }
}
