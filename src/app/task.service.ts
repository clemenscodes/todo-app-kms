import { Injectable } from '@angular/core';
import { Task } from './model/task';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskEditComponent } from './task-edit-modal/task-edit-modal.component';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private modalService: NgbModal) {}

  _taskList: Task[] = [new Task('Aufgabe'), new Task('Noch eine Aufgabe')];

  async openTaskEditModal(editEntry: Task): Promise<void> {
    console.log(editEntry)
    const modalReference = this.modalService.open(TaskEditComponent);
    try {
      const result = modalReference.componentInstance();
      console.log(result);
      const title: string = result.title !== '' ? result.title : '';
      this.editTask(editEntry, title);
    } catch (err) {
      console.log(`something went wrong with the edit. Error: ${err}`);
    }
  }

  editTask(editEntry: Task, title: string): void {
    for (const task of this.taskList) {
      if (editEntry.id === task.id) {
        task.title = title;
      }
    }
  }

  doneTask(id: number): void {
    for (const item of this._taskList) {
      if (item.id === id) {
        item.done = !item.done;
      }
    }
  }

  get taskList(): Task[] {
    return this._taskList;
  }

  addTasK(title: string) {
    if (title.trim() == "") {
      return;
    }
    this.taskList.push(new Task(title));
  }

  deleteTask(task: Task) : number{
    if(this.taskList.length == 0){
      return 0;
    }
    let index = this.taskList.indexOf(task);
    this.taskList.splice(index,1);
    return 1;
  }

}
