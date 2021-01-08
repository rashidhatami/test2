import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {TypeCard} from '../../models/typeCard.model';
import {DuplicateCard} from '../../models/duplicateCard.model';
import {GeoWork} from '../../models/geoWork.model';
import {UploadImageComponent} from '../partial/upload-image/upload-image.component';
import {RestDataSource} from '../../models/rest.datasource';
import {NgForm} from '@angular/forms';
import {ImageUtility} from '../../services/imageUtility';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackBarComponent} from '../partial/snack-bar/snack-bar.component';
import {InputErrorStateMatcher} from '../../models/errorstate/input.errorstate';
import {Employee} from '../../models/employee.model';
import {RequestRetiredCardFormGroup} from '../../models/form-builder/requestRetiredCard.formBuilder';

@Component({
  selector: 'app-request-retired-card',
  templateUrl: './request-retired-card.component.html',
  styleUrls: ['./request-retired-card.component.scss']
})
export class RequestRetiredCardComponent {
  formGroup: RequestRetiredCardFormGroup;
  typeCardItems: TypeCard;
  geoWorkItems: GeoWork;
  duplicateCardItems: DuplicateCard;
  formSubmitted: boolean;
  empNoInput: string;
  submittedEmpNo = false;
  firstSubmitEmpNo = false;
  matcher: InputErrorStateMatcher;
  employee: Employee;
  loading: boolean;

  constructor(public dataSource: RestDataSource, private ref: ChangeDetectorRef, public imageUtility: ImageUtility,
              private snackBar: MatSnackBar) {
    this.formGroup = new RequestRetiredCardFormGroup();
    this.typeCardItems = new TypeCard();
    this.geoWorkItems = new GeoWork();
    this.duplicateCardItems = new DuplicateCard();
    this.formSubmitted = false;
    this.matcher = new InputErrorStateMatcher();
    this.loading = false;
  }

  get titleForm(): string {
    return 'فرم ثبت درخواست کارت بازنشستگان';
  }

  @ViewChild(UploadImageComponent) uploadImageComponent: UploadImageComponent;

  getValidationImageUpload(): boolean {
    return this.uploadImageComponent.validation();
  }

  get getDataImageUpload(): string {
    return this.uploadImageComponent.imgURL;
  }

  resetForm = (form: NgForm) => {
    this.formGroup.reset();
    this.formSubmitted = this.submittedEmpNo = false;
    this.empNoInput = '';
    this.uploadImageComponent.clearImage();
    form.resetForm();
  };

  getEmployee(form: NgForm) {
    this.firstSubmitEmpNo = true;

    if (form.valid) {
      this.loading = true;
      this.dataSource.getEmployee(this.empNoInput).subscribe(data => {
        if (!data.empno) {
          this.snackBar.openFromComponent(SnackBarComponent, {
            data: 'کاربری یافت نگردید',
            panelClass: 'orange-snackbar',
            duration: 3000
          });

          this.submittedEmpNo = true;
          this.firstSubmitEmpNo = false;
          this.loading = false;
          this.ref.detectChanges();
          return;
        }
        // load image
        // if (blobImage && blobImage.length !== 0) {
        //     this.imageUtility.convertBlob_2_B64(this.imageUtility.convertNumber_2_Blob(blobImage),
        //         (imgDataParam) => {
        //             const imgData = this.imageUtility.convertB64_2_Image(imgDataParam);
        //             this.uploadImageComponent.loadImage(imgData);
        //         });
        // }

        // fill form
        this.formGroup.patchValue(data);
        this.employee = data;

        this.submittedEmpNo = true;
        this.firstSubmitEmpNo = false;
        this.loading = false;
        this.ref.detectChanges();
      });
    }// end valid
  }// end getEmployee

  submitForm(form: NgForm) {
    this.formSubmitted = true;

    this.getValidationImageUpload();

    if (this.formGroup.valid) {
      if (this.getValidationImageUpload()) {
        return;
      }

      this.loading = true;
      // --------------------------------------------------------------
      // get data for post
      // Object.keys(this.formGroup.controls)
      // .forEach(c => this.ourObject[c] = this.formGroup.controls[c].value);\

      // post data
      // @ts-ignore
      const todayDate = new Date().toLocaleDateString('fa-IR').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
      const FIRST_NM = this.employee.fname;
      const LAST_NM = this.employee.lname;
      const MOBILE_NO = this.formGroup.controls['mobile'].value;
      const EMAIL_ADD = null;
      const DESC = null;
      const REPLICA = 0;
      const FATHER = this.employee.father;
      const SSN = this.employee.ssn;
      const LICENCE = this.employee.licence;
      const COURSE = this.employee.coursest;
      const PA_OM = this.employee.d_pa_om;
      const CH_OM = this.employee.d_ch_om;
      const JOB_TITLE = this.employee.jobtitle;
      const JOB_CODE = this.employee.jobcode;
      const JOB_GRADE = this.employee.cjobgrade;
      const ZIP_CODE = this.employee.zipcode;
      const HOME_ADD = this.formGroup.controls['homeadd'].value;
      const HOME_TEL = this.employee.hometell;
      const PANISH = this.employee.panish;
      const GEOWORK = null;
      const STATUS = 1;
      const creatorid = 970725; //user ID;
      const editorid = null; //user ID;
      const createdate = todayDate;
      const editdate = todayDate;
      const accessgroup = this.formGroup.controls['geoWork'].value;
      const state_ID = null;
      const city_ID = null;
      const retired = 0;
      const delivered = null;
      const state = null;
      const city = null;
      const des = null;
      const EMPLOYEE_TYPE_DESC = 0;
      const REPLICA_IN_REQUEST = null;
      const OLD_PERSONAL_ID = this.employee.empno;
      const NATIONAL_ID = this.employee.nationalcode;
      const EFINGERPRINT_IMG = null;
      const OFINGERPRINT_IMG = null;
      const CARD_PASSWORD = null;
      const EMPLOYEE_TYPE = null;
      const ACCEPT_REJECT = 0;
      const CARD_PRINTED = 0;
      const DATE_REQUEST = todayDate;
      const BIRTH_CITY = this.employee.brthcity;
      const BIRTH_DATE = this.employee.birthdate;
      const EMPLOYEE_DATE = this.employee.empdate;
      const NEW_PERSONAL_ID = this.employee.emp10;
      const JOB_GRADE_CODE = this.employee.cjobgrade;
      const OFFICE_TEL = null;
      const GEOWORK_DESC = '0';
      const DELIVERY_DATE = '0';
      const CODE_PA_OM = +this.employee.panish; //110030720000 fava
      const OMOR_TITLE = 0;

      this.dataSource.checkDuplicateRequestCard(this.empNoInput).subscribe(res => {
        if (res === false) {
          this.snackBar.openFromComponent(SnackBarComponent, {
            data: 'برای پرسنل موردنظر درخواست قبلا ثبت گردیده است',
            panelClass: 'orange-snackbar',
            duration: 3000
          });
          this.loading = false;
          this.ref.detectChanges();
          return;
        }

        this.dataSource.saveRequestEmployee(
            FIRST_NM,
            LAST_NM,
            MOBILE_NO,
            EMAIL_ADD,
            DESC,
            REPLICA,
            FATHER,
            SSN,
            LICENCE,
            COURSE,
            PA_OM,
            CH_OM,
            JOB_TITLE,
            JOB_CODE,
            JOB_GRADE,
            ZIP_CODE,
            HOME_ADD,
            HOME_TEL,
            PANISH,
            GEOWORK,
            STATUS,
            creatorid,
            editorid,
            createdate,
            editdate,
            accessgroup,
            state_ID,
            city_ID,
            retired,
            delivered,
            state,
            city,
            des,
            EMPLOYEE_TYPE_DESC,
            REPLICA_IN_REQUEST,
            OLD_PERSONAL_ID,
            NATIONAL_ID,
            EFINGERPRINT_IMG,
            OFINGERPRINT_IMG,
            this.imageUtility.convertB64_2_Byte(this.uploadImageComponent.imgURL), // send image
            CARD_PASSWORD,
            EMPLOYEE_TYPE,
            ACCEPT_REJECT,
            CARD_PRINTED,
            DATE_REQUEST,
            BIRTH_CITY,
            BIRTH_DATE,
            EMPLOYEE_DATE,
            NEW_PERSONAL_ID,
            JOB_GRADE_CODE,
            OFFICE_TEL,
            GEOWORK_DESC,
            DELIVERY_DATE,
            CODE_PA_OM,
            OMOR_TITLE
        ).subscribe(
            data => {
              this.loading = false;
              this.resetForm(form);
              this.formSubmitted = false;
              this.submittedEmpNo = false;
              this.ref.detectChanges();
              this.snackBar.openFromComponent(SnackBarComponent, {
                data: 'درخواست با موفقیت ثبت گردید',
                panelClass: 'orange-snackbar',
                duration: 3000
              });
            }
        );
      });
    }
  }
}
