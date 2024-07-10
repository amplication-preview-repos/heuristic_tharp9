import { SortOrder } from "../../util/SortOrder";

export type BetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  prediction?: SortOrder;
  userId?: SortOrder;
  raceId?: SortOrder;
  userReference?: SortOrder;
  raceReference?: SortOrder;
  predictionDetails?: SortOrder;
  userRelation?: SortOrder;
  raceRelation?: SortOrder;
};
