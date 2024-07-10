import { Routes } from "@angular/router";

export const homeRoutes: Routes = [
  { path: "users", loadComponent: () => import("./users/users.component").then((m) => m.UsersComponent) },
  {
    path: "users/:userId",
    loadComponent: () =>
      import("./user-posts-cards/user-posts-cards.component").then((m) => m.UserPostsCardsComponent),
  },
  { path: "posts", loadComponent: () => import("./posts/posts.component").then((m) => m.PostsComponent) },
];
