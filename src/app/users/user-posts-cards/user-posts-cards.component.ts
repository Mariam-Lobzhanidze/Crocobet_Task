import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserDataService } from "../../services/userdata.service";
import { map } from "rxjs";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";
import { Post } from "../../interfaces/post.interface";

@Component({
  selector: "app-user-posts-cards",
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: "./user-posts-cards.component.html",
  styleUrl: "./user-posts-cards.component.scss",
})
export class UserPostsCardsComponent implements OnInit {
  private userId: number | undefined;
  public activeUserPostsData!: Post[];

  public constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userDataService: UserDataService
  ) {}

  public ngOnInit(): void {
    this.userId = +this.route.snapshot.params["id"];

    this.userDataService
      .getUsersPosts()
      .pipe(map((posts: Post[]) => posts.filter((post: Post) => post.userId === this.userId)))
      .subscribe(
        (posts: Post[]) => {
          this.activeUserPostsData = posts;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public goBackToUsersPage(): void {
    this.router.navigate(["/users"]);
  }
}
