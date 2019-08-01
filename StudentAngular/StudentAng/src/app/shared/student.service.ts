import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  formData: Student;
  list: Student[];
  readonly urlAPI = "http://localhost:65186/api";
  constructor(private http: HttpClient) { }

  postStudent(formData: Student){
    return this.http.post(this.urlAPI+'/StudentDatas',formData)
    
  }

  refreshList(){
    this.http.get(this.urlAPI+'/StudentDatas')
    .toPromise().then(res=> this.list = res as Student[]);
  }

  deleteStudent(Id: number){
    return this.http.delete(this.urlAPI+'/StudentDatas/'+Id)
  }
}
