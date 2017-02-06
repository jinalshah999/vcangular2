import { Routes,RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskComponent } from './tasks/addtask.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
const router:Routes=[
  {path: '', redirectTo: '/allTask', pathMatch: 'full'}, 
   {path:'allTask',component:TasksComponent},
   {path:'addTask',component:AddtaskComponent},
   {path:'pipedemo',component:PipesdemoComponent}
];

export const routing=RouterModule.forRoot(router);