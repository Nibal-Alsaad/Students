import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { StudentsInfoComponent } from './students-info/students-info.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsInfoComponent,
    StudentViewComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'view/:id' ,component:StudentViewComponent},
      {path:'edit/:id',component:StudentEditComponent},
      {path:'delete/:id',component:StudentDeleteComponent},
      {path:'student/:pageNum',component:StudentsInfoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
