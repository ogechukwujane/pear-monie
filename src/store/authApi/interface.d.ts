interface ISignUp {
  username: string;
  password: string;
  email: string;
}

interface ILogin {
  username: string;
  password: string;
}

interface ILoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}
