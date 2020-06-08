import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SectionService {

  constructor(private httpClient: HttpClient) { }

  getSection(): Observable<any> {
    return this.httpClient.get<any>('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section')
  }

}
