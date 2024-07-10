import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RaceWhereUniqueInput } from "../race/RaceWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BetWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  prediction?: JsonFilter;
  user?: UserWhereUniqueInput;
  race?: RaceWhereUniqueInput;
  userReference?: StringNullableFilter;
  raceReference?: StringNullableFilter;
  predictionDetails?: JsonFilter;
  userRelation?: StringNullableFilter;
  raceRelation?: StringNullableFilter;
};
