import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  countryCode: string;
  firstName: string;
  email: string;
  isActive?: number; 
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:4000/api/v1/';

  constructor(private http: HttpClient) { }

  getSites(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sites/list`);
  }

  async getUsersAsync(): Promise<any> {
    return this.http.get<any>(`${this.apiUrl}user/list`).toPromise();
  }

  getUsers(): Observable<{ alluserlist: User[] }> {
    return this.http.get<{ alluserlist: User[] }>(`${this.apiUrl}user/list`);
  }
  
}
