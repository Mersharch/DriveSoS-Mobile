import { ParamListBase } from "@react-navigation/native";

export interface AuthParamlist extends ParamListBase {
    Login: { msg: string } | undefined;
    SignUp: undefined;
    Forgot: undefined;
}
export interface AppParamlist extends ParamListBase {
    Home: any;
    History: any;
}
