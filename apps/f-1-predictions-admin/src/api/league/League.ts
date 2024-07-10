import { JsonValue } from "type-fest";

export type League = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  users?: Array<"Option1">;
  predictionHistory: JsonValue;
  points: number | null;
  races?: Array<"Option1">;
};
