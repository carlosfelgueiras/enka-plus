import {
  genshinProfileSchema,
  GenshinProfile as GenshinProfileExternal,
} from "./model/external/genshin";
import { GenshinProfile } from "./model/internal/genshin";
import { translate } from "./localization";
import express from "express";

async function getPlayerData(uid: string): Promise<GenshinProfile> {
  const result = await fetch(`https://enka.network/api/uid/${uid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "cato-teste",
    },
  });

  const json = await result.json();

  const playerInfo: GenshinProfileExternal = genshinProfileSchema.parse(json);

  const genshinProfile = new GenshinProfile(playerInfo, (key) =>
    translate(key, "en"),
  );

  return genshinProfile;
}

const app = express();

app.get("/favicon.ico", (req, res) => res.status(204));

app.get("/:uid", async (req, res) => {
  try {
    const profile = await getPlayerData(req.params.uid);
    res.send(profile);
  } catch (error) {
    res.status(404).send({ message: "User not found" });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
