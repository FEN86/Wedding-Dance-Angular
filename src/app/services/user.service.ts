import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authorized: boolean = true;

  constructor(
    private httpClient: HttpClient
  ) { }

  public isAuthorized(): boolean {
    return this.authorized;
  }

  public login(username: string, pass: string): Observable<any> {
    return this.httpClient.post('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/user/login', {
      email: username,
      password: pass
    }).pipe(tap({
      next: (response: {'access_token': string;}) => {
        this.authorized = true;
        window.localStorage.setItem('access_token', response.access_token);
        // show success message
      },
      error: () => {
        // show error message
      }
    }));
  }
}
