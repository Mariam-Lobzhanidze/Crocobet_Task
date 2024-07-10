import { Component, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { UserDataService } from "../../services/userdata.service";
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-users",
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: "./users.component.html",
  styleUrl: "./users.component.scss",
})
export class UsersComponent implements OnInit {
  public dataSource = [];
  public displayedColumns: String[] = ["name", "lastName", "phone", "email", "company name", "action"];

  public postsData: any;
  public constructor(
    private usersDataService: UserDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.usersDataService.getUsers().subscribe((usersData) => {
      this.dataSource = usersData.map((user: any) => {
        const [firstName, lastName] = user.name.split(" ");

        return {
          ...user,
          firstName: firstName,
          lastName: lastName,
        };
      });
      console.log(this.dataSource);
    });
  }

  public onUserPostsPage(userId: number): void {
    this.router.navigate([userId], { relativeTo: this.route });
  }
}
