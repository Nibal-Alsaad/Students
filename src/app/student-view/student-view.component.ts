import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  studentName;
 _studentService:StudentsService;
  constructor(studentService:StudentsService,private route:ActivatedRoute)
   {
    this._studentService=studentService;
    }
  ngOnInit(){
    this.route.paramMap.subscribe(params=>
      {
        var studentID= params.get('id');
        this.studentName=this._studentService.getStudentByID(studentID).name;
      })

  }



}
