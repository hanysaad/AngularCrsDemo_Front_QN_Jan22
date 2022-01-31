import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { existEmailValidator } from 'src/app/CustomValidators/ExistEmail.Validator';
import { passwordMatch } from 'src/app/CustomValidators/PasswordMatch.Validator';
import { IUser } from 'src/app/Models/iuser';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  userRegFrm: FormGroup;
  existUserEmails: string[]=[];
  constructor(private fb: FormBuilder) {
    this.existUserEmails=["aa@aa.com", "bb@bb.com", "dd@dd.com"];

    this.userRegFrm = fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      email: ['', [Validators.required, existEmailValidator(this.existUserEmails)]],
      phoneNo: fb.array([this.fb.control('')]),
      address: fb.group({
        city: [''],
        postalCode: [''],
        street: ['']
      }),
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      referral: [''],
      referralOther: ['']
    }, {validators: passwordMatch});

    // this.userRegFrm=new FormGroup({
    //   fullName: new FormControl('',[Validators.required, Validators.pattern('[A-Za-z]{3,}')]),
    //   email: new FormControl(''),
    //   phoneNo: new FormControl(''),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     postalCode: new FormControl(''),
    //     street: new FormControl('')
    //   }),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl('')
    // });

  }

  ngOnInit(): void {
    //Call API to fill exist emails
    // Check for path params, to specify user reg. or Edit profile
    // In case of EditProfile

    // Call API to get user profile
    //  this.userRegFrm.setValue({ // Must provide all properties
    //   fullName: 'ITI',
    //   email: 'info@iti.gov.eg',
    //   address:
    //   {
    //     city: 'Assiut',
    //     postalCode: 111,
    //     street: 'street 1'
    //   }
    //  });

    //  this.userRegFrm.get('fullName')?.setValue('Test');

    // this.userRegFrm.patchValue({ // can provide some properties
    //   fullName: 'ITI',
    //   email: 'info@iti.gov.eg',
    //   address:
    //   {
    //     city: 'Assiut',
    //     postalCode: 111,
    //     street: 'street 1'
    //   }
    //  });
  }

  get fullName() {
    return this.userRegFrm.get('fullName');
  }

  get email() {
    return this.userRegFrm.get('email');
  }

  get phoneNumbers() {
    return this.userRegFrm.get('phoneNo') as FormArray;
  }

  get referral() {
    return this.userRegFrm.get('referral');
  }

  get password() {
    return this.userRegFrm.get('password');
  }

  get confirmPassword() {
    return this.userRegFrm.get('confirmPassword');
  }

  addPhoneNo(event: any) {
    this.phoneNumbers.push(this.fb.control(''));
    event.target?.classList.add('d-none');
  }

  updateReferralValidators() {
    if (this.referral?.value == "other") {
      this.userRegFrm.get('referralOther')?.addValidators([Validators.required]);
    }
    else {
      this.userRegFrm.get('referralOther')?.clearValidators();
    }
    this.userRegFrm.get('referralOther')?.updateValueAndValidity();
  }

  submit() {
    let userModel: IUser = this.userRegFrm.value as IUser;
    // let userModel: IUser=  <IUser>this.userRegFrm.value ;
    // Call API, send userModel
    console.log(userModel);
  }

}
