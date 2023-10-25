import Logger from '../utils/Logger';
import API from '../utils/api';
import axios from 'axios';

// interface RegisterResponse {
//   success?: boolean;
//   user?: UserProps;
//   token: string;
//   message?: string;
//   error?: any;
// }

const create = async (data: any, token: string | null) => {
  Logger.info(`create d ${data}`);
  try {
    const res = await axios<any>({
      method: 'POST',
      url: `${API}/sos`,
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!res.data.success) {
      throw new Error(res.data.message);
    }
    Logger.info(`res  ${JSON.stringify(res.data)}`);
    return res.data;
  } catch (error: any) {
    Logger.error(`Request Service error  ${error.message}`);
    return {
      error: error.message,
    };
  }
};




export default {
  create,
};
