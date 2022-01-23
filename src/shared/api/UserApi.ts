import type {User} from '../model/system/UserModel';
import type {AxiosResponse} from 'axios';
import {API} from './Api';
import AuthApi from './AuthApi';

const CURRENT_USER_PATH = '/user/me';
const USER_REFRESH_TOKEN = '/auth/refresh-token';

class UserApi {
  public static get = async (): Promise<User | null> => {
    const response: AxiosResponse = await API().get(CURRENT_USER_PATH);
    if (!response) {
      return null;
    }
    return await response.data;
  };

  public static login = async (username: string, password: string): Promise<User | null> => {
    const jwt = await AuthApi.authenticate(username, password);
    return jwt ? await UserApi.get() : null;
  };
}

export default UserApi;
