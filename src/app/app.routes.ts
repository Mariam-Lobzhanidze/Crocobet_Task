import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { homeRoutes } from "./home/home.routes";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    children: homeRoutes,
  },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];
