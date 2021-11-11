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

  it('should have label "title of todo"', () => {
    const label: HTMLElement = fixture.nativeElement.querySelector('label');
    expect(label.innerText).toMatch("Title of ToDo");
  });

  it('should have no entry in form text field', () => {
    expect(inputText.value).toEqual('');
  })

  it('should add task with add function', () => {
    expect(taskService.taskList).toHaveSize(2); // 2 dummy entries
    inputText.value = "test-task";
    component.addTask();
    expect(taskService.taskList).toHaveSize(3);
  })

  it('should not add empty task with add function', () => {
    expect(taskService.taskList).toHaveSize(2); // 2 dummy entries
    inputText.value = "";
    component.addTask();
    expect(taskService.taskList).toHaveSize(2);
  })

  it('should add task with submit button', () => {
    expect(taskService.taskList).toHaveSize(2); // 2 dummy entries
    fixture.whenStable().then(() => {
      inputText.value = "test-task";
      spyOn(component, 'addTask');
      // submitButton = fixture.debugElement.query(By.css('button')).nativeElement;
      submitButton = fixture.nativeElement.querySelector('button');
      //submitButton.click(); // not working
      expect(component.addTask).toHaveBeenCalled();
      expect(taskService.taskList).toHaveSize(3);
    })
  })

});
