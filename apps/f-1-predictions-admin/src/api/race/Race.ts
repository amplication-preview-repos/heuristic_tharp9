import { JsonValue } from "type-fest";
import { Bet } from "../bet/Bet";

export type Race = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  date: Date | null;
  location: string | null;
  results: JsonValue;
  schedule: string | null;
  bets?: Array<Bet>;
};
