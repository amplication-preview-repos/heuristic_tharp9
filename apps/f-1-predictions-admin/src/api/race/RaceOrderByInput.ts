import { SortOrder } from "../../util/SortOrder";

export type RaceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  date?: SortOrder;
  location?: SortOrder;
  results?: SortOrder;
  schedule?: SortOrder;
};
