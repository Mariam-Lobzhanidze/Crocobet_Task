import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-posts-cards",
  standalone: true,
  imports: [],
  templateUrl: "./user-posts-cards.component.html",
  styleUrl: "./user-posts-cards.component.scss",
})
export class UserPostsCardsComponent {
  public constructor(private route: ActivatedRoute) {}
}
