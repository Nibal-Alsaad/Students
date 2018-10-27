import { ActivatedRoute } from '@angular/router';
import { StudentsService } from './../students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  _studentService:StudentsService;
  studentID;
  studentName;
  constructor(studentService:StudentsService,private route:ActivatedRoute) { 
   this._studentService=studentService;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
     this.studentID=params.get('id');
     this.studentName=this._studentService.getStudentByID(this.studentID).name; 
    })
  }
 onDelete(){
   this._studentService.deleteStudents(this.studentID);
 }
}
