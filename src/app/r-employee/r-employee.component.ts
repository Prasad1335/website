import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-employee',
  templateUrl: './r-employee.component.html',
  styleUrls: ['./r-employee.component.css']
})
export class REmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  employees:Employee[]=[
    {empId:1,empName:"Onkar Choudhari",empDesc:"Founder And CTO at wai technologies",empimage:"https://www.waiin.com/wp-content/uploads/2021/07/Omkar-Choudhari.png"},
    {empId:2,empName:"kirti kulkarni",empDesc:"Product R&D Head at wai technologies",empimage:"https://www.waiin.com/wp-content/uploads/2021/07/Kirti-Kulkarni.png"},
    {empId:3,empName:"Sonal karandikar",empDesc:"Hr Manager at wai technologies",empimage:"https://www.waiin.com/wp-content/uploads/2021/08/Employee-Testimonial_Sonal-Karandikar.png"},
    {empId:4,empName:"Rakesh Varthak",empDesc:"Chief Executive Officer at wai technologies",empimage:"https://www.waiin.com/wp-content/uploads/2021/07/Rakesh-Vartak.png"},
    {empId:5,empName:"Harshada Jadhav",empDesc:"VP Customer Success at wai technologies",empimage:"https://www.waiin.com/wp-content/uploads/2021/07/Harshada-Jadhav.png"},
    {empId:6,empName:"Sameer Nair",empDesc:"Director-Operations at wai technologies",empimage:"https://www.waiin.com/wp-content/uploads/2021/07/Sameer-Nair.png"}
  ];

}



export class Employee{
  empId:number;
  empName:string;
  empDesc:string;
  empimage:string;

  constructor(empId:number,empName:string,empDesc:string,empimage:string){
    this.empId=empId;
    this.empName=empName;
    this.empDesc=empDesc;
    this.empimage=empimage;
  }
}