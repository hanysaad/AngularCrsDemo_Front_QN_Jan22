import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
//Custom Validator:
// https://angular.io/guide/form-validation#defining-custom-validators

/*
 Validator functions
  Validator functions can be either synchronous or asynchronous.

  Sync validators: Synchronous functions that take a control instance and immediately return either a set of validation errors or null. Pass these in as the second argument when you instantiate a FormControl.

  Async validators: Asynchronous functions that take a control instance and return a Promise or Observable that later emits a set of validation errors or null. Pass these in as the third argument when you instantiate a FormControl.
*/

  /* It's not recommended to use this implementation
     to send the email list,
     INSTEAD, use Async validator to call API,
      that takes the email value and returns boolean
     https://angular.io/guide/form-validation#creating-asynchronous-validators
     https://www.concretepage.com/angular-2/angular-custom-async-validator-example#AsyncValidatorFn
     https://www.tektutorialshub.com/angular/angular-async-validator-example/
     https://www.thisdot.co/blog/using-custom-async-validators-in-angular-reactive-forms
     https://codinglatte.com/posts/angular/how-to-add-async-validators-to-an-angular-reactive-form/
  */
export function existEmailValidator(existEmails: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let emailVal: string = control.value;
    if(emailVal.length==0 && control.untouched)
      return null;
    console.log(existEmails)
    let validationError = {'existEmail': { 'value': emailVal }}
    let foundEmail= existEmails.includes(emailVal);
    return foundEmail? validationError : null;
    // return (emailVal.includes('@')) ? null : validationError;
  }
}
