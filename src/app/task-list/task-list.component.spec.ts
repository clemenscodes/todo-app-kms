import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TaskListComponent} from './task-list.component';
import {Task} from "../model/task";

describe('TaskListComponent', () => {
    let component: TaskListComponent;
    let fixture: ComponentFixture<TaskListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TaskListComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TaskListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should delete item from list', () => {
        const t1: Task = new Task("First", false);
        const t2: Task = new Task("Second", false);
        const t3: Task = new Task("Third", false);
        const t4: Task = new Task("Fourth", false);
        const t5: Task = new Task("Fifth", false);
        component.taskService._taskList = [t1, t2, t3, t4, t5];

        component.taskService.deleteTask(t1);
        expect(component.taskService._taskList).toEqual([t2, t3, t4, t5]);

        component.taskService.deleteTask(t5);
        expect(component.taskService._taskList).toEqual([t2, t3, t4]);

        component.taskService.deleteTask(t3);
        expect(component.taskService._taskList).toEqual([t2, t4]);
    });
});
