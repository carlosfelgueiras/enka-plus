import { genshinProfileSchema, GenshinProfile as GenshinProfileExternal } from "./model/external/genshin";
import { GenshinProfile } from "./model/internal/genshin";

let result = await fetch("https://enka.network/api/uid/747552694", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "User-Agent": "cato-teste"
    },
})

let json = await result.json();

let playerInfo: GenshinProfileExternal = genshinProfileSchema.parse(json);

let genshinProfile = new GenshinProfile(playerInfo);

console.log(genshinProfile);