// Cross-field custom validator
//https://angular.io/guide/form-validation#cross-field-validation

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// If validator has no parameters
export const passwordMatch: ValidatorFn =
  (frmGroup: AbstractControl): ValidationErrors | null => {
    let passControl= frmGroup.get('password');
    let confirmPassControl= frmGroup.get('confirmPassword');
    if(!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
      return null;

    let valErr={'UnmatchedPassword': {'pass': passControl?.value, 'confrim': confirmPassControl?.value}}
    return (passControl?.value==confirmPassControl?.value)? null : valErr;
  }



// If validator has parameters
export function passwordMatchAdv(complexPassword: boolean=false): ValidatorFn
{
  //If complextPassword?, check fullname not included in password
  return (control: AbstractControl) : ValidationErrors | null=>{
    let passControl= control.get('password');
    let confirmPassControl= control.get('confirmPassword');
    if(!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
      return null;

    let valErr={'UnmatchedPassword': {'pass': passControl?.value, 'confrim': confirmPassControl?.value}}
    return (passControl?.value==confirmPassControl?.value)? null : valErr;
  }
}

