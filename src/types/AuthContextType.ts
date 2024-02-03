import { RequestResponseType } from "./RequestResponseType";
import { User } from "./UserType";

export type AuthContextType = {
    user: User | null;
    login: (user: User) => Promise<RequestResponseType | null>;
    logout: () => void;
};
