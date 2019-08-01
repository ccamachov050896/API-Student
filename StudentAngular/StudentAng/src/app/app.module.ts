import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { AllStudentsComponent } from './students/all-students/all-students.component';
import { StudentService } from './shared/student.service';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    AllStudentsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
