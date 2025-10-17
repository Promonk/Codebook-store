import { createContext, useState } from "react";
import type { userType } from "../interfaces/userType"
import type { userContextType } from "../interfaces/userContextType";

export const UserContext = createContext({} as userContextType);

export const UserProvider = ({children}: any) => {
    const [user, setUser] = useState<userType | null>(null);
    const [token, setToken] = useState<string | null>(null);

    const login = (userData: userType, authToken: string) => {
        setUser(userData);
        setToken(authToken);
    };
    const logout = () => {
        setUser(null);
        setToken(null);
    };
    return (
        <UserContext.Provider value={{ user, token, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
