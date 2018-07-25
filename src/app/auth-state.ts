import { AuthStateModel, Signin, Signout } from './state-models';
import { State, Selector, StateContext, Action } from '@ngxs/store';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@State<AuthStateModel>({
  name: 'auth'
})
export class AuthState {
  @Selector()
  static token(state: AuthStateModel) {
    return state.token;
  }

  @Selector()
  static userDetails(state: AuthStateModel) {
    return {
      name: state.name,
      email: state.email
    };
  }

  /*

  You can add extra selectors for different information stored with our state like refresh token and other personal details

  @Selector()
  static refreshToken(state: AuthStateModel) {
    return state.refreshToken;
  }

  */

  constructor(private authService: AuthService) {}

  @Action(Signin)
  Signin(
    { patchState }: StateContext<AuthStateModel>,
    { email, password }: Signin
  ) {
    return this.authService.signin(email, password).pipe(
      tap(result => {
        
          patchState({
            token: result.token,
            name: result.name,
            email: result.email
          });
        
      })
    );
  }

  @Action(Signout)
  Signout({ setState, getState }: StateContext<AuthStateModel>) {
    const { token } = getState();
    return this.authService.signout().pipe(
      tap(_ => {
        setState({});
      })
    );
  }
}
