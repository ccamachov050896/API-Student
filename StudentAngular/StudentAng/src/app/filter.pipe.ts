import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(students: any, term: any, mark: number, subject: string): any {
    if(term === undefined && mark === undefined) return students
    if(term != undefined) return students.filter(function(student){
      return student.Student.toLowerCase().includes(term.toLowerCase());
    })
    if(mark != undefined) 
    return students.filter(function(student){
      if(student.LanguageArts > mark || student.Science > mark || student.SocialStds > mark || student.Math > mark){
        return student;
      }
    })

  }
}
