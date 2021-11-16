import {TestBed} from '@angular/core/testing';

import {TaskService} from './task.service';
import {TaskListComponent} from "./task-list/task-list.component";
import {Task} from "./model/task";

describe('TaskService', () => {
    let service: TaskService;
    let component: TaskListComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TaskService);
        component = TestBed.inject(TaskListComponent);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should not delete from empty list ', () => {
        const task1: Task = new Task("First", false);
        const task2: Task = new Task("Second", false);
        const task3: Task = new Task("Third", true);
        const task4: Task = new Task("Fourth", false);
        const task5: Task = new Task("Fifth", true);

        console.log(component);

        component.taskService._taskList = [];

        let result = component.taskService.deleteTask(task1);
        expect(result).toEqual(0);
    });
});
