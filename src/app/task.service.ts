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
    const modalReference = this.modalService.open(TaskEditComponent);
    try {
      const result = await modalReference.result;
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

  addTasK(task: Task) {
    if (task.title.trim() == '') {
      return;
    }
    this.taskList.push(new Task(task.title));
  }

  taskDone(id: number){
    this.taskList[id].done = true;
    return;
  }
}
