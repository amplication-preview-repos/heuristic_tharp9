import { SortOrder } from "../../util/SortOrder";

export type LeagueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  users?: SortOrder;
  predictionHistory?: SortOrder;
  points?: SortOrder;
  races?: SortOrder;
};
