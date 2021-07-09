import {TOKEN_STORAGE_KEY} from '../Constants';
import type {Jwt} from '../model/Token';
import {AUTH_POST} from './Api';

class AuthApi {
  public static authenticate = async (username: string, password: string): Promise<Readonly<Jwt> | null> => {
    const response = await AUTH_POST({password, username});
    if (!response) {
      return null;
    }
    const jwt = await response.data;
    sessionStorage.setItem(TOKEN_STORAGE_KEY, jwt.token);
    return jwt;
  };
}

export default AuthApi;
