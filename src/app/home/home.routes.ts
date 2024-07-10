import { Routes } from "@angular/router";

export const homeRoutes: Routes = [
  { path: "users", loadComponent: () => import("./users/users.component").then((m) => m.UsersComponent) },
  {
    path: "users/:userId/postCards",
    loadComponent: () =>
      import("./user-posts-cards/user-posts-cards.component").then((m) => m.UserPostsCardsComponent),
  },

  {
    path: "users/:userId/todos",
    loadComponent: () => import("./todos/todos.component").then((m) => m.ToDoComponent),
  },
  { path: "posts", loadComponent: () => import("./posts/posts.component").then((m) => m.PostsComponent) },
];
