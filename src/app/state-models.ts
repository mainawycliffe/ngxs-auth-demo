export class AuthStateModel {
  // if you have an extra token like authorization, you can add it here plus any other user information you might want to store
  token?: string;
  // refreshToken?: string;
  email?: string;
  name?: string;
}

export class Signin {
  static readonly type = '[Auth] Signin';
  // these are parameters to pass to the action when dispatching it also known as metadata
  // they work just like normal parameters in a normal parameters

  constructor(private email: string, private password: string) {}
}

export class Signout {
  static readonly type = '[Auth] Signout';
}
