import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadComponent: () => import("./home/home.component").then((m) => m.HomeComponent),
  },

  { path: "users", loadChildren: () => import("./users/users.route").then((mod) => mod.userRoutes) },

  {
    path: "posts",
    loadComponent: () => import("./posts/posts.component").then((m) => m.PostsComponent),
  },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];
