import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section } from "../interfaces/data";

@Injectable({
  providedIn: 'root'
})
export class EditContentService {

  @Input() public data: Section;

  constructor(
    private httpClient: HttpClient
  ) { }

  sendData(data: Section): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    const authorizationHeader = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken);

    return this.httpClient.put<any>('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/offer', data, { headers: authorizationHeader });
  }
}
