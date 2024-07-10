import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LeagueWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  predictionHistory?: JsonFilter;
  points?: IntNullableFilter;
};
