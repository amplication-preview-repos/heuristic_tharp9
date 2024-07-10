import { InputJsonValue } from "../../types";

export type LeagueCreateInput = {
  name?: string | null;
  users?: Array<"Option1">;
  predictionHistory?: InputJsonValue;
  points?: number | null;
  races?: Array<"Option1">;
};
