import { PlayerInfo as PlayerInfoExternal } from "../../../external/genshin/player-info";
import { AbyssInfo } from "./abyss-info";

export class PlayerInfo {
  username: string;
  level: number;
  signature: string;
  worldLevel?: number;
  achievementNumber: number;
  abyssInfo?: AbyssInfo;

  constructor(playerInfo: PlayerInfoExternal) {
    this.username = playerInfo.nickname;
    this.level = playerInfo.level;
    this.signature = playerInfo.signature || "";
    this.worldLevel = playerInfo.worldLevel;
    this.achievementNumber = playerInfo.finishAchievementNum;
    if (
      playerInfo.towerFloorIndex !== undefined &&
      playerInfo.towerLevelIndex !== undefined
    ) {
      this.abyssInfo = new AbyssInfo(
        playerInfo.towerFloorIndex,
        playerInfo.towerLevelIndex,
      );
    }
  }
}
