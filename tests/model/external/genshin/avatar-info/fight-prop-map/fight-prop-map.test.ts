import exp from "constants";
import { fightPropMapScema } from "../../../../../../src/model/external/genshin/avatar-info/fight-prop-map";

test("standard behaviour parsing", () => {
  const data = {
    "1": 101,
    "2": 102,
    "3": 103,
    "4": 104,
    "5": 105,
    "6": 106,
    "7": 107,
    "8": 108,
    "9": 109,
    "20": 120,
    "22": 122,
    "23": 123,
    "26": 126,
    "27": 127,
    "28": 128,
    "29": 129,
    "30": 130,
    "40": 140,
    "41": 141,
    "42": 142,
    "43": 143,
    "44": 144,
    "45": 145,
    "46": 146,
    "50": 150,
    "51": 151,
    "52": 152,
    "53": 153,
    "54": 154,
    "55": 155,
    "56": 156,
  };

  const result = fightPropMapScema.parse(data);

  expect(result).toEqual(data);
});

test("missing values", () => {
  const data = {};

  const result = fightPropMapScema.parse(data);

  expect(result["1"]).toEqual(0);
});
