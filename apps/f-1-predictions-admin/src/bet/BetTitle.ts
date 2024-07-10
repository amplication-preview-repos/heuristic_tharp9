import { Bet as TBet } from "../api/bet/Bet";

export const BET_TITLE_FIELD = "userReference";

export const BetTitle = (record: TBet): string => {
  return record.userReference?.toString() || String(record.id);
};
