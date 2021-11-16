import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'task-edit-modal',
    templateUrl: './task-edit-modal.component.html',
    styleUrls: ['./task-edit-modal.component.css']
})
export class TaskEditComponent implements OnInit {
    public title: string;

    constructor(
        public activeModal: NgbActiveModal,
        public taskService: TaskService
    ) {
        this.title = '';
    }

    save(title: string): void {
        if (this.title.trim().length > 0) {
            this.activeModal.close({title});
        }
    }

    ngOnInit(): void {
    }
}
