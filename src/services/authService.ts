import {UserProps} from '../context/AuthContext';
import Logger from '../utils/Logger';
import API from '../utils/api';
import axios from 'axios';

interface RegisterResponse {
  success: boolean;
  user: UserProps;
  token: string;
}

const register = async (data: UserProps) => {
  try {
    const res = await axios<RegisterResponse>({
      method: 'POST',
      url: `${API}/user`,
      data: JSON.stringify(data),
    });
      
      Logger.info(`res  ${res}`);

    // if (!res.success) {
    //   throw new Error("Error Registering User");
    // }
  } catch (error) {
    Logger.error(`Service error  ${error}`);
  }
};


export default {
    register,
};
