import {ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';

import {AddTaskComponent} from './add-task.component';
import {TaskService} from "../task.service";
import {By} from "@angular/platform-browser";

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
  let inputText: HTMLInputElement;
  let submitButton: HTMLButtonElement;
  let taskService: TaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputText = fixture.nativeElement.querySelector('input');
    taskService = TestBed.inject(TaskService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  });
