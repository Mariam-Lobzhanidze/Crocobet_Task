import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserDataService } from "../../services/userdata.service";
import { map } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-todos",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./todos.component.html",
  styleUrl: "./todos.component.scss",
})
export class ToDoComponent implements OnInit {
  private userId: number | undefined;
  public activeUserToDoData: any;
  public constructor(private route: ActivatedRoute, private userDataService: UserDataService) {}

  public ngOnInit(): void {
    this.userId = +this.route.snapshot.params["id"];

    this.userDataService
      .getUsersToDo()
      .pipe(map((todos: any[]) => todos.filter((todo) => todo.userId === this.userId)))
      .subscribe((posts) => {
        this.activeUserToDoData = posts;

        // this.userDataService.userPostsData = this.activeUserPostsData;
        console.log(this.activeUserToDoData);
      });
  }
}
