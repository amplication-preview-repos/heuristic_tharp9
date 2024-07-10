import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { Race } from "../race/Race";

export type Bet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  prediction: JsonValue;
  user?: User | null;
  race?: Race | null;
  userReference: string | null;
  raceReference: string | null;
  predictionDetails: JsonValue;
  userRelation: string | null;
  raceRelation: string | null;
};
