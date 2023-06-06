import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  avatar?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
