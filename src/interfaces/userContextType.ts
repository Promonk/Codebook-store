import { userType } from "./userType";

export interface userContextType {
    user: userType | null;
    token: string | null;
    login: (userData: userType, authToken: string) => void;
    logout: () => void;
}
