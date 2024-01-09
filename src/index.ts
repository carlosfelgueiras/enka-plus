import {
  genshinProfileSchema,
  GenshinProfile as GenshinProfileExternal,
} from "./model/external/genshin";
import { GenshinProfile } from "./model/internal/genshin";

const result = await fetch("https://enka.network/api/uid/747552694", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "cato-teste",
  },
});

const json = await result.json();

const playerInfo: GenshinProfileExternal = genshinProfileSchema.parse(json);

const genshinProfile = new GenshinProfile(playerInfo);

console.log(genshinProfile);
