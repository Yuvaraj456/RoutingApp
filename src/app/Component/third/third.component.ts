import { Component, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,FormArray,FormControl, ReactiveFormsModule, FormsModule, Form, Validators, FormBuilder } from '@angular/forms';
import { PersonService } from 'src/app/Services/person.service';
import { Person } from 'src/app/person';
import { EvenNumberValidator } from 'src/app/custom_validators/even.number.validator';
@Component({
  selector: 'app-third',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {

  myForm:FormGroup;
  personId!:number;
constructor(private personService:PersonService, private fb:FormBuilder)
{
  this.myForm = this.fb.group({
    personId : this.fb.control(0,[EvenNumberValidator()]),
    personName : this.fb.control('',[Validators.required]),
    skills : this.fb.array([

    ])
  });
}

  get personIdControl()
  {
    return this.myForm.get('personId');
  }

  get personNameControl()
  {
    return this.myForm.get('personName');
  }


  get employees(): FormArray
  {
    return this.myForm.get('skills') as FormArray;
  }

  
 
  AddEmp()
  {
    let empForm:FormGroup = this.fb.group({
      skillId:this.fb.control(0),
      skillName: this.fb.control('', [Validators.required]),
      skillLevel : this.fb.control('',[Validators.required])
    });

    (<FormArray>this.myForm.get('skills')).push(empForm);
  }

  RemoveEmp(i:number)
  {
      this.employees.removeAt(i);
  }

  UpdatePerson(form:FormGroup)
  {
    
    if(this.myForm.valid)
      {
        console.log(this.myForm.value);
        this.personService.updatePerson(this.myForm.value).subscribe({
          next:(result:any) =>
          {
            this.myForm.reset();
            console.log(result);
          },
          error:(ex)=>{
            console.log(ex);
          }
        });
      }
  }

  DeletePerson(form:FormGroup)
  {
    if(this.myForm.valid)
      {
        console.log(this.myForm.value);
        this.personService.deletePerson(this.myForm.get('personId')?.value).subscribe({
          next:(result:string | any ) =>
          {
            console.log(result);
          },
          error:(ex)=>{
            console.log(ex);
          }
        });
      }
  }

  SubmitForm(myForm:FormGroup)
  {
    console.log(myForm.value);

    if(this.myForm.valid)
    {
      console.log(this.myForm.value);
      this.personService.AddPerson(this.myForm.value).subscribe({
        next:(result:any) =>
        {
          this.myForm.reset();
          console.log(result);
        },
        error:(ex)=>{
          console.log(ex);
        }
      });
    }
  }

  getPersonById()
  {
    
    this.personService.getPerson(this.personId).subscribe({

      next: (result:Person)=>{ 
        this.CreateskillArray(result.skills?.length); 
        setTimeout(()=>{
          this.myForm.setValue(result);
        },200);    
        
      },
      error:(ex)=>{
        console.log(ex);
      }

    });


  }

  CreateskillArray(count:number = 0)
  {
    for(let i=0; i<count; i++)
    {
      this.AddEmp();
    }


  }


}
