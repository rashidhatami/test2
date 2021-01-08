import { FormControl, FormGroup, Validators } from '@angular/forms';

export class RequestEmployeeCardFormControl extends FormControl {
    label: string;
    modelProperty: string;
    constructor(label: string, property: string, value: any, validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }

    getValidationMessages(): string[] {
        const messages: string[] = [];

        if (this.errors) {
            for (const errorName in this.errors) {
                switch (errorName) {
                    case 'required':
                        messages.push(` لطفا فیلد ${this.label} را وارد نمایید `);
                        break;
                    case 'minlength':
                        messages.push(` فیلد ${this.label} باید حداقل ${this.errors['minlength'].requiredLength} کاراکتر را دارا باشد `);
                        break;
                    case 'maxlength':
                        messages.push(` فیلد ${this.label} نباید بیش از ${this.errors['maxlength'].requiredLength} کاراکتر را دارا باشد `);
                        break;
                    case 'pattern':
                        messages.push(` فیلد${this.label} شامل کاراکترهای غیرمجاز است `);
                        break;
                }
            }
        }
        return messages;
    }
}

export class RequestEmployeeCardFormGroup extends FormGroup {
    constructor() {
        super({
            fname: new RequestEmployeeCardFormControl('',"fname","",''),
            lname: new RequestEmployeeCardFormControl('',"lname","",''),
            father: new RequestEmployeeCardFormControl('',"father","",''),

            empno: new RequestEmployeeCardFormControl('',"empno","",''),
            emp10: new RequestEmployeeCardFormControl('',"emp10","",''),
            nationalcode: new RequestEmployeeCardFormControl('',"nationalcode","",''),

            ssn: new RequestEmployeeCardFormControl('',"ssn","",''),
            brthcity: new RequestEmployeeCardFormControl('',"brthcity","",''),
            birthdate: new RequestEmployeeCardFormControl('',"birthdate","",''),

            licence: new RequestEmployeeCardFormControl('',"licence","",''),
            coursest: new RequestEmployeeCardFormControl('',"coursest","",''),
            empdate: new RequestEmployeeCardFormControl('',"empdate","",''),

            d_pa_om: new RequestEmployeeCardFormControl('',"d_pa_om","",''),
            jobtitle: new RequestEmployeeCardFormControl('',"jobtitle","",''),

            homeadd: new RequestEmployeeCardFormControl(
                "آدرس محل سکونت", "homeadd", "", Validators.required),
            mobile: new RequestEmployeeCardFormControl("تلفن همراه", "mobile", "",
                Validators.compose([Validators.required,
                    Validators.pattern("^[0-9]*$"),
                    Validators.minLength(11),
                    Validators.maxLength(11)])),
            typeCard: new RequestEmployeeCardFormControl(
                "نوع کارت", "typeCard", "", Validators.required),
            geoWork: new RequestEmployeeCardFormControl(
                "محل خدمت", "geoWork", "", Validators.required),
            duplicateCard: new RequestEmployeeCardFormControl(
                "کارت المثنی", "duplicateCard", "", Validators.required),
        });
    }

    getValidationMessages(name: string): string[] {
        return (this.controls[name] as RequestEmployeeCardFormControl).getValidationMessages();
    }

    getFormValidationMessages(): string[] {
        const messages: string[] = [];
        Object.values(this.controls).forEach(c =>
            messages.push(...(c as RequestEmployeeCardFormControl).getValidationMessages()));
        return messages;
    }
}
