import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[AcceptNumbers]'
})
export class AcceptNumbersDirective {
    regexStr = '^[0-9]*$';

    constructor(private el: ElementRef) {
    }

    @Input() OnlyNumber: boolean;

    @HostListener('keydown', ['$event']) onKeyDown(event) {
        const e = event as KeyboardEvent;
        if (this.OnlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                return;
            }

            if (new RegExp(this.regexStr).test(String.fromCharCode(e.keyCode))) {
                return;
            } else {
                e.preventDefault();
            }
        }
    }
}