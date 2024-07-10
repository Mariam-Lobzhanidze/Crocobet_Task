import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { interval, Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements OnInit, OnDestroy {
  public currentDateTime: Date = new Date();
  private destroy$: Subject<void> = new Subject<void>();

  public ngOnInit(): void {
    // this.updateDateAndTime();
  }

  private updateDateAndTime(): void {
    // interval(1000)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(() => {
    //     this.currentDateTime = new Date();
    //   });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
