import { GenshinProfile as GenshinProfileExternal } from "../../../model/external/genshin";
import { Character } from "./character";
import { PlayerInfo } from "./player-info";

export class GenshinProfile {
  public uid: string;
  public playerInfo: PlayerInfo;
  public characterInfo: Array<Character> = new Array<Character>();
  public ttl: number;

  constructor(
    profile: GenshinProfileExternal,
    translator: (key: string) => string = (key) => key,
  ) {
    this.ttl = profile.ttl;
    this.uid = profile.uid;

    this.playerInfo = new PlayerInfo(profile.playerInfo);

    profile.avatarInfoList.forEach((avatarInfo) => {
      this.characterInfo.push(new Character(avatarInfo, translator));
    });
  }
}
