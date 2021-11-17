import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TaskEditComponent} from './task-edit-modal.component';
import {TaskService} from '../task.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

describe('TaskEditComponent', () => {
    let component: TaskEditComponent;
    let fixture: ComponentFixture<TaskEditComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TaskEditComponent],
            providers: [TaskService, NgbActiveModal],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TaskEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
