import { RequestResponseType } from "./RequestResponseType";
import { User } from "./UserType";

export type AuthContextType = {
    user: User | null;
    login: (user: User) => RequestResponseType;
    logout: () => void;
};
