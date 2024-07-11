import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserDataService } from "../../services/userdata.service";
import { map } from "rxjs";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-user-posts-cards",
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: "./user-posts-cards.component.html",
  styleUrl: "./user-posts-cards.component.scss",
})
export class UserPostsCardsComponent implements OnInit {
  private userId: number | undefined;
  public activeUserPostsData: any;

  public constructor(private route: ActivatedRoute, private userDataService: UserDataService) {}

  public ngOnInit(): void {
    this.userId = +this.route.snapshot.params["id"];
    console.log(this.route.snapshot.params["id"]);

    this.userDataService
      .getUsersPosts()
      .pipe(map((posts: any[]) => posts.filter((post) => post.userId === this.userId)))
      .subscribe((posts) => {
        this.activeUserPostsData = posts;

        // this.userDataService.userPostsData = this.activeUserPostsData;
        console.log(this.activeUserPostsData);
      });
  }
}
