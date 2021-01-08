import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { UserModel } from '../../../_models/user.model';
import { AuthModel } from '../../../_models/auth.model';
import { UsersTable } from 'src/app/_fake/fake-db/users.table';
import { environment } from 'src/environments/environment';
import { RestDataSource } from 'src/app/models/rest.datasource';


const API_USERS_URL = `${environment.apiUrl}/users`;

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  constructor(private http: HttpClient,private restDataSoure: RestDataSource) { }

  auth_token: string;
  username: string;

  // public methods
  login(username: string, password: string): Observable<any> {
    const notFoundError = new Error('Not Found');
    if (!username || !password) {
      return of(notFoundError);
    }
    return this.http.post(`${this.restDataSoure.baseUrlLogin}/authenticate`, {username, password})
        .pipe(
            map(
        result => {
              if (result['token'].length <= 0) {
                  return notFoundError;
              }

              this.username = username;

              const auth = new AuthModel();
              auth.accessToken = result['token'];
              auth.refreshToken = result['token'];
              this.auth_token = auth.accessToken;
              auth.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);

              return auth;

              // this.http.get('http://localhost:8081/refresh', {
              //         headers: new HttpHeaders({
              //             "Authorization": `Bearer<${reply['token']}>`,
              //             Vary: 'Origin',
              //         })}).subscribe(
              //     data => console.log('refresh', data),
              //     error => console.log('oops2', error)
              // );

          }
        )
      );
  }

  createUser(user: UserModel): Observable<any> {
    user.accessToken = 'access-token-' + Math.random();
    user.refreshToken = 'access-token-' + Math.random();
    user.expiresIn = new Date(Date.now() + 100 * 24 * 60 * 60 * 1000);
    user.pic = './assets/media/users/default.jpg';

    return this.http.post<UserModel>(API_USERS_URL, user);
  }

  forgotPassword(email: string): Observable<boolean> {
    return this.getAllUsers().pipe(
      map((result: UserModel[]) => {
        const user = result.find(
          (u) => u.email.toLowerCase() === email.toLowerCase()
        );
        return user !== undefined;
      })
    );
  }

  getUserByToken(token: string): Observable<UserModel> {
    const user = UsersTable.users.find((u) => {
      return u.accessToken === token;
    });

    if (!user) {
      return of(undefined);
    }

    return of(user);
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(API_USERS_URL);
  }

  getUserDetail(): Observable<any> {
        return this.http.get(`${this.restDataSoure.baseUrlLogin}/userDetails/${this.username}`);
  }
}
