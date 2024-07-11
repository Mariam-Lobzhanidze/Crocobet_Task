import { Component, OnInit } from "@angular/core";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { UserDataService } from "../services/userdata.service";
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-users",
  standalone: true,
  imports: [MatTableModule, MatButtonModule, CommonModule],
  templateUrl: "./users.component.html",
  styleUrl: "./users.component.scss",
})
export class UsersComponent implements OnInit {
  public searchResultState = false;
  public dataSource = new MatTableDataSource();
  public displayedColumns: String[] = [
    "name",
    "lastName",
    "phone",
    "email",
    "company name",
    "action",
    "todo",
  ];

  public constructor(
    private usersDataService: UserDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.usersDataService.getUsers().subscribe((usersData) => {
      this.dataSource.data = usersData.map((user: any) => {
        const [firstName, lastName] = user.name.split(" ");

        return {
          ...user,
          firstName: firstName,
          lastName: lastName,
        };
      });
    });
  }

  public onUserPostsPage(userId: number): void {
    this.router.navigate([userId, "postCards"], { relativeTo: this.route });
  }

  public onToDoListPage(userId: number): void {
    this.router.navigate([userId, "todos"], { relativeTo: this.route });
  }

  public applyFilter(e: Event): void {
    const filterValue = (e.target as HTMLInputElement).value.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: any, filter: string): boolean => {
      const optionsForFiltering = [
        data.firstName.toLowerCase(),
        data.email.toLowerCase(),
        data.lastName.toLowerCase(),
      ];

      return optionsForFiltering.some((option) => option.includes(filter));
    };

    this.dataSource.filter = filterValue;

    this.searchResultState = this.dataSource.filteredData.length === 0;
  }
}
