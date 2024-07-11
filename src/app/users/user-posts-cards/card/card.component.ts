import { Component, Input } from "@angular/core";
import { Post } from "../../../interfaces/post.interface";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {
  @Input() post!: Post;
}
