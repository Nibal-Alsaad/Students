import { ActivatedRoute } from '@angular/router';
import { StudentsService } from './../students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'students-info',
  templateUrl: './students-info.component.html',
  styleUrls: ['./students-info.component.css']
})
export class StudentsInfoComponent implements OnInit {
   students;
   isSelected:boolean;
   selectedStudent;
   _studentService:StudentsService;
   page;
  constructor(studentService:StudentsService,private route:ActivatedRoute) 
  { 
    this._studentService=studentService;    
   }
   ngOnInit (){

      this.route.paramMap.subscribe((params)=>{
      this.page=params.get('pageNum');
      this.students=this._studentService.getStudents(this.page);

    })

  
   }

   getGender(gender:boolean){
    return (gender)? 'Male' : 'Female';
  }

  }


