export interface AuthenticationRequest {
  username: string;
  password: string;
}

export interface Jwt {
  email: string;
  id: string;
  roles: ReadonlyArray<string>;
  token: string;
  type: null;
  username: string;
}
