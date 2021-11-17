import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TaskListComponent} from './task-list/task-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TaskComponent} from './task/task.component';
import {FormsModule} from "@angular/forms";
import {TaskEditComponent} from './task-edit-modal/task-edit-modal.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {TaskService} from './task.service';

@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        TaskComponent,
        TaskEditComponent,
        AddTaskComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
    ],
    providers: [TaskService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]

})
export class AppModule {
}
