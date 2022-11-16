import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ApiService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
      this.usersUrl = 'http://localhost:8080/alticci/';
  }

  sendNumber(number: Number): Observable<Number>{
    return this.http.post<Number>(this.usersUrl, number);
  }
    
    // public getNumber(number : Number):  {
    //     return this.http.get(this.usersUrl, )
    // }
}
