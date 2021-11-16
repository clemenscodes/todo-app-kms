import {Component, Injectable, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from '../model/task';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
})

@Injectable({
    providedIn: 'root',
})
export class TaskListComponent implements OnInit {
    constructor(public taskService: TaskService) {
    }

    ngOnInit(): void {
    }

    get taskList(): Task[] {
        return this.taskService.taskList;
    }

    openEditModal(editEntry: Task): void {
        console.log(editEntry);
        this.taskService.openTaskEditModal(editEntry).then();
    }

}
