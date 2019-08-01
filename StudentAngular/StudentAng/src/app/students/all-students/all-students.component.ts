import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  constructor(private service: StudentService, private toastr: ToastrService) {

   }

  ngOnInit() {
    this.service.refreshList();
  }

  onDelete(Id: number){
    if(confirm('Are you want to delete this student?')){
    this.service.deleteStudent(Id).subscribe(res=>{this.service.refreshList();this.toastr.error('Student deleted', 'Student Data');})
    }
  }

}
