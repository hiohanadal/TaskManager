import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [
    {path: 'task-list', title:'Task Manager', component: TaskListComponent},
    {path: 'task-details/:id', title:'Details', component:TaskDetailsComponent},
    {path: '', redirectTo:'/task-list', pathMatch:'full'}
];
