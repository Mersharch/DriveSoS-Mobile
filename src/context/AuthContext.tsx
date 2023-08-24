import React, { createContext, useState } from "react";
import Aservice from '../services/authService';
import Logger from "../utils/Logger";


interface fixChildrenError {
    children:React.ReactNode
}

export interface UserProps {
    _id?: string,
    email: string,
    password: string,
    phone?: string,
    name?: string,
    role?: string,
}

export interface AuthContextProps {
    user: UserProps | null
    register: ((data:UserProps) => Promise<any>)
    login: ((data: UserProps) => Promise<any>)
    token: string | null
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    register: async (data: UserProps) => { },
    login: async (data: UserProps) => { },
    token:null,
});

export const AuthProvider: React.FC<fixChildrenError> = ({ children }) => {
    const [user, setUser] = useState<UserProps>({
        _id:"",
        name: "",
        email: "",
        phone: "",
        password: "",
        role:"",
    });
    const [token, setToken] = useState<string>("");

    const register = async (data:any) => {
        // register user
        try {
            const res = await Aservice.register(data);
            if (!res.success) {
                throw new Error(res.error);
            }
        return {
            success: true,
            msg: "User Registered",
        };
        } catch (error:any) {
            return {
                error:error.message,
            };
        }
        

    };

    const login = async (data:UserProps) => {
        // login user
        try {
            const res = await Aservice.login(data);
            if (!res.success) {
                throw new Error(res.error);
            }
            Logger.info(res.user);
            setUser(res.user);
            setToken(res.token);
            Logger.info(user);
        return {
            success: true,
            msg: "Login Successful",
        };
        } catch (error:any) {
            return {
                error:error.message,
            };
        }
        

    };
    return (
        <AuthContext.Provider value={{user, register, login, token}}>
            {children}
        </AuthContext.Provider>
    );
};
