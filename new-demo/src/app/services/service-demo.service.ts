import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from '../models/test';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDemoService {

  constructor(private http: HttpClient) { }

  postData(id: string): Observable<Test> {
    const url = 'http://localhost:8080/test';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': '*/*'
      })
    };
    const body = { id: id };
    return this.http.post<Test>(url, body, httpOptions);
  }
}

