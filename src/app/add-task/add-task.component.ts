import {Component } from '@angular/core';
import {TaskService} from '../task.service';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

    constructor(private taskService: TaskService) {}

    addTask() {
        let title: string = (<HTMLInputElement>document.getElementById("titleToDo")).value;
        this.taskService.addTasK(title);
    }

}
