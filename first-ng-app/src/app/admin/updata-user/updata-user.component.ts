import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {UserApiService} from "../../core/api/user-api.service";
import {Router} from "@angular/router";
import {User} from "../../shared/model/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-updata-user',
  templateUrl: './updata-user.component.html',
  styleUrls: ['./updata-user.component.css']
})
export class UpdataUserComponent implements OnInit {

  formDisabled: boolean = true;
  passchange:boolean = false;
  hidebutton: boolean = false;
  userId: number = Number(window.location.href.split('user/updata/')[1]);
  user: Observable<User> = this.userApiClient.getUserById(this.userId);
  nowuser: User | undefined;


  constructor(private readonly formBuilder: FormBuilder,
              private readonly userApiClient: UserApiService,
              private readonly router: Router) {

    this.tempForm = this.formBuilder.group(
      {
        id: window.location.href.split('user/updata/')[1],
        username: ['', Validators.required],
        name: ['', Validators.required],
        gender: [1, Validators.required],
        birthday: ['', Validators.required],
        phoneNum: ['', Validators.required],
        homeAddress: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        isAdmin: [false, Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {disable: this.formDisabled}
    );
    this.updataForm = this.formBuilder.group(
      {
        id: window.location.href.split('user/updata/')[1],
        username: ['', Validators.required],
        name: ['', Validators.required],
        gender: [1, Validators.required],
        birthday: ['', Validators.required],
        phoneNum: ['', Validators.required],
        homeAddress: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        isAdmin: [false, Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {disable: this.formDisabled}
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.tempForm.controls;
  }

  get u(){
    return this.updataForm.controls;
  }

  updataForm: FormGroup;
  tempForm: FormGroup;
  submitted = false;

  genderOpts = [{label: 'Male', value: 1}, {label: 'Female', value: 2}, {label: 'Other', value: 3}];

  ngOnInit() {
    // loading existing user data by given id
    const url = window.location.href;
    const userId = url.split('user/updata/')[1];

    this.userApiClient.getUserById(+userId).subscribe(user => {
      this.tempForm.patchValue(user);
      this.tempForm.disable();
    });

    this.u.phoneNum = this.f.phoneNum;
  }

  onSubmit(updataForm: FormGroup) {
    // this.user.forEach(user=>{
    //   this.nowuser = user;
    // });
    // console.log(this.nowuser)
    this.nowuser = updataForm.value;
    console.log(updataForm);
    this.submitted = true;
    // // stop here if form is invalid
    // if (updataForm.invalid) {
    //   Object.keys(updataForm.controls).forEach(key => {
    //     updataForm.controls[key].markAsDirty();
    //   });
    //   updataForm.updateValueAndValidity();
    //   return;
    // }
    console.log(1);
    this.userApiClient.updata(this.nowuser).subscribe(() => {
      alert('User updata success');
    });

  }

  onClick(value: any) {
    this.tempForm.value.value="";
    console.log(this.tempForm.value.value);
  }

  onReset() {
    this.submitted = false;
    this.tempForm.reset();
  }

  onChange(){
    this.passchange = true;
    this.hidebutton = true;
  }


}
