import { Routes,RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskComponent } from './tasks/addtask.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { TaskdbComponent } from './taskdb/taskdb.component';
import { AddtasksComponent } from './taskdb/addtasks/addtasks.component'
import { Demo1Component } from './demo1/demo1.component';
import { ContentdemoComponent } from './contentdemo/contentdemo.component';
const router:Routes=[
  {path: '', redirectTo: '/allTask', pathMatch: 'full'}, 
   {path:'allTask',component:TasksComponent},
   {path:'addTask',component:AddtaskComponent},
   {path:'pipedemo',component:PipesdemoComponent},
   {path:'taskdb',component:TaskdbComponent},
     {path:'addtaskdb',component:AddtasksComponent},
     {path:'demo1',component:Demo1Component},
     {path:'demo12',component:ContentdemoComponent}


];

export const routing=RouterModule.forRoot(router);