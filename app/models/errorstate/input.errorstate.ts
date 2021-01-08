import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

export class InputErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return (control.invalid && control.touched);
    }
}
