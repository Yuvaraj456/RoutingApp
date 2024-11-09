import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {  FormsModule, NgForm, NgControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  name:string='';
  age:Number=0;

  Person:Partial<{Name:string,Age:number,Designation:string,Country:string, State:string}> = {};

  constructor(private route:ActivatedRoute) {
  
  }

  CountryList:{Name:string,Value:string}[] = [
    {Name:'USA',Value:'USA'}, 
    {Name:'India',Value:'India'}, 
    {Name:'UK',Value:'UK'}
  ];

  StateList: {key:string,value:string[]}[] = [
    {key:'USA', value:['California','Texes','Alaska']},
    {key:'India', value:['TamilNadu','Karnataka','AndhraPradesh','Kerala']},
    {key:'UK', value:['England','ScotLand','Wales']},

 ];

  ngOnInit()
  {
    this.route.queryParams.subscribe((route)=>{
      this.name = route['Name']; 
      this.age = route['Age'];
    })
  }

  SubmitForm(myForm:NgForm)
  {
      console.log(this.Person);
      console.log('%c Form Submitted Successfully','color:red;');

  }

  ResetForm(ngFrom:NgForm)
  {
   
    ngFrom.resetForm();

  }

  setDefaultValue(ngFrom:NgForm)
  {
    ngFrom.resetForm({
      Name:'Arun',
      Age:25,
      Designation:'Engineer',
      Country:'USA',
      State:'Texes'
    });

  }

  GetStateList(country:string|undefined)
  {
    return this.StateList.find(x=>x.key == country);
  }
}
