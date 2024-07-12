import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserDataService } from "../../services/userdata.service";
import { map } from "rxjs";
import { CommonModule } from "@angular/common";
import { Todo } from "../../interfaces/todo.interface";

@Component({
  selector: "app-todos",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./todos.component.html",
  styleUrl: "./todos.component.scss",
})
export class ToDoComponent implements OnInit {
  private userId: number | undefined;
  public activeUserToDoData!: Todo[];
  public constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userDataService: UserDataService
  ) {}

  public ngOnInit(): void {
    this.userId = +this.route.snapshot.params["id"];

    this.userDataService
      .getUsersToDo()
      .pipe(map((todos: Todo[]) => todos.filter((todo: Todo) => todo.userId === this.userId)))
      .subscribe((todos: Todo[]) => {
        this.activeUserToDoData = todos;
      });
  }

  public goBackToUsersPage(): void {
    this.router.navigate(["/users"]);
  }
}
