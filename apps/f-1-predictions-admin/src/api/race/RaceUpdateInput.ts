import { InputJsonValue } from "../../types";
import { BetUpdateManyWithoutRacesInput } from "./BetUpdateManyWithoutRacesInput";

export type RaceUpdateInput = {
  name?: string | null;
  date?: Date | null;
  location?: string | null;
  results?: InputJsonValue;
  schedule?: string | null;
  bets?: BetUpdateManyWithoutRacesInput;
};
