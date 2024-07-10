import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BetListRelationFilter } from "../bet/BetListRelationFilter";

export type RaceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  location?: StringNullableFilter;
  results?: JsonFilter;
  schedule?: StringNullableFilter;
  bets?: BetListRelationFilter;
};
