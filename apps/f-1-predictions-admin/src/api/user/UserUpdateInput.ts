import { InputJsonValue } from "../../types";
import { BetUpdateManyWithoutUsersInput } from "./BetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  bets?: BetUpdateManyWithoutUsersInput;
  nickname?: string | null;
  familyName?: string | null;
  displayName?: string | null;
  givenName?: string | null;
};
