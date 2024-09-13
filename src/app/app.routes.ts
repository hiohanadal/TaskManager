import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [
    {path: 'task-list', title:'Lista de Tarefas', component: TaskListComponent},
    {path: 'task-details', title:'Detalhes', component:TaskDetailsComponent},
    {path: '', redirectTo:'task-list', pathMatch:'full'}
];
