import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { format } from 'url';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service: StudentService, private toastr: ToastrService) { }

  ngOnInit() {
      this.resetForm();
  }
  resetForm(form?: NgForm){
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Id:null,
      Student:'',
      LanguageArts:null,
      Science:null,
      SocialStudies:null,
      Maths:null
    }
  }

  onSubmit(form: NgForm){
    this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postStudent(form.value).subscribe(res => { this.toastr.success('Student saved', 'Student Data'); this.resetForm(form)})
    this.service.refreshList();
  }

}
