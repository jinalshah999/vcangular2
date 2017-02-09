import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo1/demo2.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskdemoService } from './taskdemo.service';
import { AddtaskComponent } from './tasks/addtask.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { DoublepipePipe } from './doublepipe.pipe';
import { FilterPipe } from './filter.pipe';
import { TaskdbComponent } from './taskdb/taskdb.component';
import { TaskdbserviceService } from './taskdbservice.service';
import { AddtasksComponent } from './taskdb/addtasks/addtasks.component';
@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    HeaderComponent,
    TasksComponent,
    AddtaskComponent,
    PipesdemoComponent,
    DoublepipePipe,
    FilterPipe,
    TaskdbComponent,
    AddtasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TaskdemoService,TaskdbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
