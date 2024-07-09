import { Routes } from "@angular/router";

export const homeRoutes: Routes = [
  { path: "users", loadComponent: () => import("./users/users.component").then((m) => m.UsersComponent) },
  { path: "posts", loadComponent: () => import("./posts/posts.component").then((m) => m.PostsComponent) },
];
