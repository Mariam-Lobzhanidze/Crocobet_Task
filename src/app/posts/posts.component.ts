import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { UserDataService } from "../services/userdata.service";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { forkJoin } from "rxjs";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-posts",
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: "./posts.component.html",
  styleUrl: "./posts.component.scss",
})
export class PostsComponent implements OnInit {
  @ViewChild("detailsDialogTemplate") detailsDialogTemplate!: TemplateRef<any>;

  public dataSource = new MatTableDataSource();
  public displayedColumns: String[] = ["userName", "postTitle", "action"];

  public constructor(private userDataService: UserDataService, private dialog: MatDialog) {}

  public ngOnInit(): void {
    forkJoin({
      usersData: this.userDataService.getUsers(),
      postsData: this.userDataService.getUsersPosts(),
    }).subscribe({
      next: (results: { usersData: any[]; postsData: any[] }) => {
        // combine data(users and posts)
        this.dataSource.data = results.postsData.map((post) => {
          const user = results.usersData.find((user) => user.id === post.userId);
          return {
            username: user ? user.username : "Unknown User",
            title: post.title,
            details: post.body,
            id: user.id,
          };
        });
        console.log("Combined Data:", this.dataSource);
      },
      error: (err) => {
        console.error("Error fetching data:", err);
      },
    });
  }

  openDetailsDialog(data: any): void {
    console.log(data);

    const dialogRef: MatDialogRef<any> = this.dialog.open(this.detailsDialogTemplate, {
      width: "500px",
      data: { title: data.title, details: data.details }, // Pass data to the dialog
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("Dialog closed with result:", result);
      // Handle any logic after dialog closes
    });
  }
}
