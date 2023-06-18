import React, { createContext, useState } from "react";
import Aservice from '../services/authService';


interface fixChildrenError {
    children:React.ReactNode
}

export interface UserProps {
    id?: string,
    email: string,
    password: string,
    phone: string,
    name: string,
    role?: string,
}

export interface AuthContextProps {
    user: UserProps | null
    register: ((data:UserProps) => Promise<void>)
}

export const AuthContext = createContext<AuthContextProps>({
    user: null
    , register: async (data:UserProps) => {},
});

export const AuthProvider: React.FC<fixChildrenError> = ({ children }) => {
    const [user, setUser] = useState<UserProps>({
        name: "",
        email: "",
        phone: "",
        password: "",
    });
    const [token, setToken] = useState<string>("");

    const register = async (data:UserProps) => {
        // register user
        const res = await Aservice.register(data);
        // const response = await 

    };
    return (
        <AuthContext.Provider value={{user, register}}>
            {children}
        </AuthContext.Provider>
    );
};
