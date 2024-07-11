import { Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserPostsCardsComponent } from "./user-posts-cards/user-posts-cards.component";
import { ToDoComponent } from "./todos/todos.component";

export const userRoutes: Routes = [
  { path: "", component: UsersComponent },
  {
    path: ":id/postCards",
    component: UserPostsCardsComponent,
  },
  {
    path: ":id/todos",
    component: ToDoComponent,
  },
];
