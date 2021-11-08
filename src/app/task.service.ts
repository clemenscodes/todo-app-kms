import { Injectable } from '@angular/core';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  _taskList: Task[] = [
    new Task('Aufgabe'),
    new Task('Noch eine Aufgabe'),
    new Task('Nochmal eine Aufgabe'),
  ]

  get taskList(): Task[] {
    return this._taskList;
  }

  addTasK(title: string) {
    if (title.trim() == "") {
      return;
    }
    this.taskList.push(new Task(title));
  }
}
