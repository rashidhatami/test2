import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/_services/auth.service';
import { UserModel } from 'src/app/modules/auth/_models/user.model';
import { RestDataSource } from 'src/app/models/rest.datasource';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../partial/snack-bar/snack-bar.component';
import { Employee } from 'src/app/models/employee.model';
import { userAccessType } from 'src/app/models/UserAccessType';
import { GeoWork } from 'src/app/models/geoWork.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  hasError: boolean;
  isLoading$: Observable<boolean>;
  empNoInput: string;
  loading: boolean;
 // user: Employee;
  accessType: userAccessType;
  geoWork: GeoWork;

  // private fields
  private unsubscribe: Subscription[] = []; 

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dataSource: RestDataSource,
    private snackBar: MatSnackBar
  ) {

    this.accessType = new userAccessType();
    this.geoWork = new GeoWork();
    this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
    this.loading = false;
  }
  get titleForm(){
    return 'فرم ثبت کاربر جدید'
  }
  ngOnInit(): void {
    this.initForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  initForm() {
    this.registrationForm = this.fb.group(
      {
        fname: '',
        lname: '',
        father: '',
        empno: '',
        emp10: '',
        d_pa_om: '',
        username: ['', Validators.required],
        password: [ '',Validators.required],
        cPassword: ['', Validators.required],
        agree: [false, Validators.compose([Validators.required])],
        accessType: ['', Validators.required],
        geoWork: ['', Validators.required],
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword,
      }
    );
  }
  getEmployee(formSearch: NgForm){
    if(formSearch.valid){
      this.loading = true;
      this.dataSource.getUser(this.empNoInput).subscribe(data => {
        if (!data.empno) {
          this.snackBar.openFromComponent(SnackBarComponent, {
              data: 'کاربری یافت نگردید',
              panelClass: 'orange-snackbar',
              duration: 3000
          });

          //this.submittedEmpNo = true;
         // this.firstSubmitEmpNo = false;
          this.loading = false;
          //this.ref.detectChanges();
          return;
      }
      //this.user = data;
      this.registrationForm.patchValue({
        fname: data.fname,
        lname: data.lname,
        father: data.father,
        empno: data.empno,
        emp10: data.emp10,
        d_pa_om: data.d_pa_om
      });
      //this.submittedEmpNo = true;
      //this.firstSubmitEmpNo = false;
      this.loading = false;
     // this.ref.detectChanges();
      },
      errorRes => {
        console.log(errorRes.error);
        if(errorRes === false){
          this.snackBar.openFromComponent(SnackBarComponent, {
            data: 'کاربر قبلا ثبت گردیده است',
            panelClass: 'orange-snackbar',
            duration: 3000
          });
          this.loading = false;
          return;
        }
      // switch(errorRes.error.error.message){
      //   case "Password_invalid":
      //     this.error = "رمز عبور صحیح نمی باشد"; //for enhencing security is best to use the same message for incorrect user and password
      //     this.isLoading = false;
      //     break;
      //   case 'user_not_found':
      //   this.error = "کاربر یافت نشد";
      //   break;

      //   default:
      //     this.error = "یک خطا رخ داده است!. کاربر در حال حاضر وجود دارد";
      //     this.isLoading = false;
      //     break;
         
      // } 
      });
    }
  }
  submit() {
    if(this.registrationForm.invalid){
      return
    }
    let userid = JSON.parse(localStorage.getItem("user"));
    const todayDate = new Date().toLocaleDateString('fa-IR').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
    const fname = this.registrationForm.controls['fname'].value;
    const lname = this.registrationForm.controls['lname'].value;
    const father = this.registrationForm.controls['father'].value;
    const empno = this.registrationForm.controls['empno'].value;
    const emp10 = this.registrationForm.controls['emp10'].value;
    const d_pa_om = this.registrationForm.controls['d_pa_om'].value;
    const username = this.registrationForm.controls['username'].value;
    const password = this.registrationForm.controls['password'].value;
    const accessType = this.registrationForm.controls['accessType'].value;
    const geoWork = this.registrationForm.controls['geoWork'].value;
    const userID = userid['userId'];
    const createDate = todayDate;

    this.dataSource.saveRegisterUser(
      fname,
      lname,
      father,
      empno,
      emp10,
      d_pa_om,
      username,
      password,
      accessType,
      geoWork,
      userID,
      createDate
    ).subscribe(data => {
      console.log(data);
      this.snackBar.openFromComponent(SnackBarComponent, {
        data: 'کاربر با موفقیت ثبت گردید ',
        panelClass: 'orange-snackbar',
        duration: 3000
    });
    },
    errorResp => {
      console.log(errorResp.error);
    })
  }
}
