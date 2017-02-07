import { Routes,RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskComponent } from './tasks/addtask.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { TaskdbComponent } from './taskdb/taskdb.component';
const router:Routes=[
  {path: '', redirectTo: '/allTask', pathMatch: 'full'}, 
   {path:'allTask',component:TasksComponent},
   {path:'addTask',component:AddtaskComponent},
   {path:'pipedemo',component:PipesdemoComponent},
   {path:'taskdb',component:TaskdbComponent}

];

export const routing=RouterModule.forRoot(router);