import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { UserDataService } from "../services/userdata.service";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { switchMap, tap } from "rxjs";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { Post } from "../interfaces/post.interface";
import { User } from "../interfaces/user.interface";

@Component({
  selector: "app-posts",
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: "./posts.component.html",
  styleUrl: "./posts.component.scss",
})
export class PostsComponent implements OnInit {
  public usersData!: User[];

  @ViewChild("detailsDialogTemplate") detailsDialogTemplate!: TemplateRef<any>;

  public dataSource = new MatTableDataSource();
  public displayedColumns: String[] = ["userName", "postTitle", "action"];

  public constructor(private userDataService: UserDataService, private dialog: MatDialog) {}

  public ngOnInit(): void {
    this.usersData = this.userDataService.usersData;

    this.getUsersData();
  }

  private getUsersData(): void {
    if (!this.usersData) {
      this.userDataService
        .getUsers()
        .pipe(
          tap((users: User[]) => {
            this.usersData = users;
          }),
          switchMap(() => this.userDataService.getUsersPosts())
        )
        .subscribe((posts: Post[]) => this.processPosts(posts));
    } else {
      this.getUsersPostsData();
    }
  }

  private getUsersPostsData(): void {
    this.userDataService.getUsersPosts().subscribe((posts: Post[]) => this.processPosts(posts));
  }

  private processPosts(posts: Post[]): void {
    this.dataSource.data = posts.map((post: Post) => {
      const user = this.usersData.find((user: User) => user.id === post.userId);

      return {
        username: user && user.username,
        title: post.title,
        details: post.body,
        id: user && user.id,
      };
    });
  }

  openDetailsDialog(data: { title: string; details: string }): void {
    const dialogRef: MatDialogRef<any> = this.dialog.open(this.detailsDialogTemplate, {
      width: "500px",
      data: { title: data.title, details: data.details },
    });
  }
}
