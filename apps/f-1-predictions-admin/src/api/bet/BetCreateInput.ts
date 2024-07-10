import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RaceWhereUniqueInput } from "../race/RaceWhereUniqueInput";

export type BetCreateInput = {
  amount?: number | null;
  prediction?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
  race?: RaceWhereUniqueInput | null;
  userReference?: string | null;
  raceReference?: string | null;
  predictionDetails?: InputJsonValue;
  userRelation?: string | null;
  raceRelation?: string | null;
};
