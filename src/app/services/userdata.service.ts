import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserDataService {
  private baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {}

  public getUsersPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  public getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }
}
