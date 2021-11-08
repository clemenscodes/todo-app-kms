import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import {Task} from "../model/task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskService : TaskService) {
  }

  ngOnInit(): void {
  }

  addTask(){
    let title: string = (<HTMLInputElement>document.getElementById("titleToDo")).value;
    this.taskService.addTasK(title);
  }

}
