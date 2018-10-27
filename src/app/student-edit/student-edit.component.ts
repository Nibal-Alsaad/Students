import { StudentsService } from './../students.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
studentName;
studentID;
NewStudentName;
_studentservice:StudentsService;
  constructor(studentService:StudentsService,private route:ActivatedRoute) 
  {
   this._studentservice=studentService;
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>
      {
        this.studentID=params.get('id');
       this.studentName=this._studentservice.getStudentByID(this.studentID).name; 
      })
  }
  onEdit(studentName){
    this._studentservice.editStudent(this.studentID,studentName);
  }
}
