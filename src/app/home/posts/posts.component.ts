import { Component, OnInit } from "@angular/core";
import { UserDataService } from "../../services/userdata.service";

@Component({
  selector: "app-posts",
  standalone: true,
  imports: [],
  templateUrl: "./posts.component.html",
  styleUrl: "./posts.component.scss",
})
export class PostsComponent implements OnInit {
  public postsData: any;
  public constructor(private userDataService: UserDataService) {}

  public ngOnInit(): void {
    this.userDataService.getUsersPosts().subscribe((posts) => {
      console.log(posts);
    });
  }
}
