import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authorized: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) { }

  public isAuthorized(): boolean {
    return this.authorized;
  }

  public login(useremail: string, pass: string): Observable<any> {
    return this.httpClient.post('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/user/login', {
      email: useremail,
      password: pass
    }).pipe(tap({
      next: (response: { 'access_token': string; }) => {
        this.authorized = true;
        window.localStorage.setItem('access_token', response.access_token);
        // show success message
        this.toastr.success('Success!');
      },
      error: () => {
        // show error message
        this.toastr.error('Wrong email or password!');
      }
    }));
  }
}
