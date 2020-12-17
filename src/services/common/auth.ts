import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IAuthCreds, IAuthStatus } from '@/interfaces';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["login"] }] */
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
}

export default new AuthService();
