import {ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';

import {AddTaskComponent} from './add-task.component';
import {TaskService} from "../task.service";
import {By} from "@angular/platform-browser";

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
  let inputText: HTMLInputElement;
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "create new todo" ', () => {
    let title: HTMLElement = fixture.nativeElement.querySelector('h5');
    expect(title.innerText).toMatch("Create New Todo");
  });

  it('should have label "title of todo" ', () => {
    let label: HTMLElement = fixture.nativeElement.querySelector('label');
    expect(label.innerText).toMatch("Title of ToDo");
  });

  it('should have no entry in form text field "title" ', () => {
    expect(inputText.value).toEqual('');
  })

  it('should have button "submit"', () => {
    let button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.innerText).toMatch("Submit");
  });

  it('should add task with addTask()', () => {
    expect(taskService.taskList).toHaveSize(2); // 2 dummy entries
    inputText.value = "test-task";
    component.addTask();
    expect(taskService.taskList).toHaveSize(3);
  })

  it('should not add empty task with addTask()', () => {
    expect(taskService.taskList).toHaveSize(2);
    inputText.value = "";
    component.addTask();
    expect(taskService.taskList).toHaveSize(2);
  })

  it('should call submit button', async () => {
    inputText.value = "test-task";
    spyOn(component, 'addTask');
    let btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);  // else full page reload errors with btn.click()
    fixture.whenStable().then(() => {
      expect(component.addTask).toHaveBeenCalled();
    })
  })
});
