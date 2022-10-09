import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ApiResponse } from "../interfaces/api";
import { TaskInterface } from "./task/task";
import { TaskService } from "./task/task.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public tasks$: Observable<ApiResponse<TaskInterface[]>> | undefined;

  constructor(private taskService: TaskService) {
  }

  public ngOnInit(): void {
    this.tasks$ = this.taskService.fetchTasks();
  }
}
