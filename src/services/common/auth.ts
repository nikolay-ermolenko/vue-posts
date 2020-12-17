import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IAuthCreds, IAuthStatus } from '@/interfaces';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["login","status","logout"] }] */
class AuthService {
  login({ username, password }: IAuthCreds): Observable<IAuthStatus> {
    const authorizedMock: IAuthStatus = {
      isAuthorized: true,
      username,
      permissions: ['ALL'],
    };
    const unauthorizedMock: IAuthStatus = {
      isAuthorized: false,
      username: null,
      permissions: [],
    };

    return of(
      username === 'user' && password === '123'
        ? authorizedMock
        : unauthorizedMock,
    ).pipe(
      delay(400),
    );
  }

  logout(): Observable<null> {
    return of(null)
      .pipe(
        delay(400),
        map((): null => null),
      );
  }

  status(): Observable<IAuthStatus | null> {
    return of(localStorage.authStatus)
      .pipe(
        delay(400),
        map((authStatus: string): IAuthStatus | null => {
          try {
            return JSON.parse(authStatus);
          } catch (e) {
            return null;
          }
        }),
      );
  }
}

export default new AuthService();
