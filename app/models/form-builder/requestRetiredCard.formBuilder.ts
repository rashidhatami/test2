import { FormControl, FormGroup, Validators } from '@angular/forms';

export class RequestRetiredCardFormBuilder extends FormControl {
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

export class RequestRetiredCardFormGroup extends FormGroup {
    constructor() {
        super({
            fname: new RequestRetiredCardFormBuilder('',"fname","",''),
            lname: new RequestRetiredCardFormBuilder('',"lname","",''),
            father: new RequestRetiredCardFormBuilder('',"father","",''),

            empno: new RequestRetiredCardFormBuilder('',"empno","",''),
            emp10: new RequestRetiredCardFormBuilder('',"emp10","",''),
            nationalcode: new RequestRetiredCardFormBuilder('',"nationalcode","",''),

            ssn: new RequestRetiredCardFormBuilder('',"ssn","",''),
            brthcity: new RequestRetiredCardFormBuilder('',"brthcity","",''),
            birthdate: new RequestRetiredCardFormBuilder('',"birthdate","",''),
            licence: new RequestRetiredCardFormBuilder('',"licence","",''),
            coursest: new RequestRetiredCardFormBuilder('',"coursest","",''),
            empdate: new RequestRetiredCardFormBuilder('',"empdate","",''),
            homeadd: new RequestRetiredCardFormBuilder(
                'آدرس محل سکونت', 'homeadd', '', Validators.required),
            mobile: new RequestRetiredCardFormBuilder('تلفن همراه', 'mobile', '',
                Validators.compose([Validators.required,
                    Validators.pattern('^[0-9]*$'),
                    Validators.minLength(11),
                    Validators.maxLength(11)])),
        });
    }

    getValidationMessages(name: string): string[] {
        return (this.controls[name] as RequestRetiredCardFormBuilder).getValidationMessages();
    }

    getFormValidationMessages(): string[] {
        const messages: string[] = [];
        Object.values(this.controls).forEach(c =>
            messages.push(...(c as RequestRetiredCardFormBuilder).getValidationMessages()));
        return messages;
    }
}
