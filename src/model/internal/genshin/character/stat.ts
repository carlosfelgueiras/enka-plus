import { Prop } from "../../../external/genshin/avatar-info/equip/prop";

export class Stat {
  public name: string = "";
  public value: number = 0;

  constructor(prop: Prop, translator: (key: string) => string = (key) => key) {
    if (prop.mainPropId) {
      this.name = translator(prop.mainPropId.toString());
    }

    if (prop.appendPropId) {
      this.name = translator(prop.appendPropId.toString());
    }

    this.value = prop.statValue;
  }
}
