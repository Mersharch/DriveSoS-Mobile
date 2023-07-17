import React, { createContext, useState } from "react";
import Aservice from '../services/authService';


interface fixChildrenError {
    children:React.ReactNode
}

export interface UserProps {
    id?: string,
    email: string,
    password: string,
    phone?: string,
    name?: string,
    role?: string,
}

export interface AuthContextProps {
    user: UserProps | null
    register: ((data:UserProps) => Promise<any>)
    login: ((data:UserProps) => Promise<any>)
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    register: async (data: UserProps) => { },
    login: async (data: UserProps) => { },
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
            setUser({...res.user});
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
        <AuthContext.Provider value={{user, register, login}}>
            {children}
        </AuthContext.Provider>
    );
};
