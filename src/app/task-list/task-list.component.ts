import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../model/task'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}

  get taskList(): Task[] {
    return this.taskService.taskList;
  }
}
