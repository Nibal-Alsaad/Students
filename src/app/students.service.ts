import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() {
    this.students=[
      {id:1,name:"test1",email:"email1@e.com",nickName:"t",birtDate:"30/01/1993",gender:true},
      {id:2,name:"test2",email:"email2@e.com",nickName:"m",birtDate:"01/01/1995",gender:false},
      {id:3,name:"test3",email:"email3@e.com",nickName:"b",birtDate:"02/03/1999",gender:true},
      {id:4,name:"test4",email:"email4@e.com",nickName:"c",birtDate:"03/01/1992",gender:false},
      {id:5,name:"test5",email:"email5@e.com",nickName:"y",birtDate:"30/03/1993",gender:true},
      {id:6,name:"test6",email:"email6@e.com",nickName:"s",birtDate:"05/08/1992",gender:false},
      {id:7,name:"test7",email:"email7@e.com",nickName:"f",birtDate:"08/01/1990",gender:true},
      {id:8,name:"test8",email:"email8@e.com",nickName:"h",birtDate:"07/09/1991",gender:false},
      {id:9,name:"test9",email:"email9@e.com",nickName:"w",birtDate:"09/11/1996",gender:true},
      {id:10,name:"test10",email:"email10@e.com",nickName:"h",birtDate:"01/01/1995",gender:false},
      {id:11,name:"test11",email:"email11@e.com",nickName:"q",birtDate:"02/03/1999",gender:true},
      {id:12,name:"test12",email:"email12@e.com",nickName:"f",birtDate:"03/01/1992",gender:false},
      {id:13,name:"test13",email:"email13@e.com",nickName:"g",birtDate:"30/03/1993",gender:true},
      {id:14,name:"test14",email:"email14@e.com",nickName:"h",birtDate:"05/08/1992",gender:false},
      {id:15,name:"test15",email:"email15@e.com",nickName:"e",birtDate:"08/01/1990",gender:true},
      {id:16,name:"test16",email:"email16@e.com",nickName:"h",birtDate:"07/09/1991",gender:false},
      {id:17,name:"test17",email:"email17@e.com",nickName:"q",birtDate:"09/11/1996",gender:true},
      {id:18,name:"test18",email:"email18@e.com",nickName:"f",birtDate:"18/02/1995",gender:false},
      {id:19,name:"test19",email:"email19@e.com",nickName:"g",birtDate:"16/12/1992",gender:true},
      {id:20,name:"test20",email:"email20@e.com",nickName:"h",birtDate:"19/06/1990",gender:false},
      {id:21,name:"test21",email:"email21@e.com",nickName:"e",birtDate:"13/04/1995",gender:true},
      {id:22,name:"test22",email:"email22@e.com",nickName:"h",birtDate:"10/02/1991",gender:false},
      {id:23,name:"test23",email:"email23@e.com",nickName:"q",birtDate:"18/02/1995",gender:true},
      {id:24,name:"test24",email:"email24@e.com",nickName:"f",birtDate:"16/05/1993",gender:false},
      {id:25,name:"test25",email:"email25@e.com",nickName:"g",birtDate:"17/11/1990",gender:true},
      {id:26,name:"test26",email:"email26@e.com",nickName:"h",birtDate:"16/02/1994",gender:false},
      {id:27,name:"test27",email:"email27@e.com",nickName:"e",birtDate:"19/07/1990",gender:true},
      {id:28,name:"test28",email:"email28@e.com",nickName:"h",birtDate:"11/03/1993",gender:false},
      {id:29,name:"test29",email:"email29@e.com",nickName:"q",birtDate:"15/06/1991",gender:true},
      {id:30,name:"test30",email:"email30@e.com",nickName:"f",birtDate:"16/10/1995",gender:false}
     
    ];
   }
  students;
  pageStudent;

 
  getStudents(pageNum)
  {
    this.pageStudent=this.students.slice(pageNum*10-10,pageNum*10)
    return this.pageStudent;

  }
  // getInitStudents()
  // {
  //   return this.students.slice(0,10)

  // }
   getStudentByID(id){
  return this.students.find(i=>i.id==id);
}
   deleteStudents(studentID){
    this.students.splice(this.students.findIndex((s)=>{return s.id==studentID}),1)
   }

   editStudent(studentID,studentName){
    var oldStudent=this.getStudentByID(studentID);
    this.students.splice(this.students.findIndex((s)=>{return s.id==studentID}),1)
    this.students.push({
    id:studentID,
    name:studentName,
    email:oldStudent.email,
    nickName:oldStudent.nickName,
    birtDate:oldStudent.birtDate,
    gender:oldStudent.gender});
}
}
