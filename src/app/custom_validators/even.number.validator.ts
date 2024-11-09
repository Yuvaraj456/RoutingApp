import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export  function EvenNumberValidator() : ValidatorFn
{

  return (control:AbstractControl) : ValidationErrors | null =>
  {

    if(control.value % 2 == 0)
    {
        return null
    }    

    return {isEven:{valid:false}};
  }
    
}