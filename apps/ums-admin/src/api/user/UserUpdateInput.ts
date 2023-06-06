import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  avatar?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
