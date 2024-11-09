import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers:[EmployeeService]
})
export class FirstComponent implements OnInit {

  employee?:{empid:number,empName:string}[];
  parameterVal?:number;
  /**
   *
   */
  constructor(private route:ActivatedRoute, private empService:EmployeeService) {
    
  }

 

  ngOnInit()
  {
    this.route.params.subscribe((route)=>{
      console.log(route);
      console.log(this.route.snapshot)
     this.parameterVal = route['empId'];
    })
    if(this.parameterVal)
    {
      this.employee = this.empService.GetEmployeeById(this.parameterVal);
    }
    else
    {

      this.employee = this.empService.GetEmployee();
    }

  }

}
