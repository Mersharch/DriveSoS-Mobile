import {UserProps} from '../context/AuthContext';
import Logger from '../utils/Logger';
import API from '../utils/api';
import axios from 'axios';

interface RegisterResponse {
  success: boolean;
  user: UserProps;
  token: string;
  message?: string;
  error?: any;
}

const register = async (data: UserProps) => {
  try {
    const res = await axios<RegisterResponse>({
      method: 'POST',
      url: `${API}/user`,
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.data.success) {
      throw new Error(res.data.message);
    }
    Logger.info(`res  ${JSON.stringify(res.data)}`);
    return res.data;
  } catch (error: any) {
    Logger.error(`Service error  ${error.message}`);
    return {
      error: error.message,
    };
  }
};


const login = async (data: UserProps) => {
  try {
    const res = await axios<RegisterResponse>({
      method: 'POST',
      url: `${API}/user/auth`,
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.data.success) {
      throw new Error(res.data.message);
    }
    Logger.info(`res  ${JSON.stringify(res.data)}`);
    return res.data;
  } catch (error: any) {
    Logger.error(`Service error  ${error.message}`);
    return {
      error: error.message,
    };
  }
};

export default {
  register,
  login,
};
