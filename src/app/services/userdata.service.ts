import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interfaces/user.interface";
import { Post } from "../interfaces/post.interface";
import { Todo } from "../interfaces/todo.interface";

@Injectable({
  providedIn: "root",
})
export class UserDataService {
  public usersData!: User[];

  private baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {}

  public getUsersPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  public getUsersToDo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`);
  }
}
