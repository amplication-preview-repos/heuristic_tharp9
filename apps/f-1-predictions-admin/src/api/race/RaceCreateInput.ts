import { InputJsonValue } from "../../types";
import { BetCreateNestedManyWithoutRacesInput } from "./BetCreateNestedManyWithoutRacesInput";

export type RaceCreateInput = {
  name?: string | null;
  date?: Date | null;
  location?: string | null;
  results?: InputJsonValue;
  schedule?: string | null;
  bets?: BetCreateNestedManyWithoutRacesInput;
};
