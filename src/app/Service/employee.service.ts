import { Injectable } from '@angular/core';


export class EmployeeService {

  constructor() { }

  employee:{empid:number,empName:string}[] = [
    {empid:1,empName:'Yuvaraj'},
    {empid:2,empName:'Arun'},
    {empid:3,empName:'Saran'},
    {empid:4,empName:'Kumar'},
    {empid:5,empName:'Rajesh'}

  ]

  GetEmployee()
  {
    return this.employee;
  }

  GetEmployeeById(id:number)
  {    
    return this.employee.filter(x=>x.empid == id);
  }
}
