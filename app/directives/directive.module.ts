import {NgModule} from '@angular/core';

import { AcceptNumbersDirective } from './acceptNumbers.directive';

@NgModule({
    imports: [],
    declarations: [AcceptNumbersDirective],
    providers: [],
    exports: [
        AcceptNumbersDirective
    ]
})
export class DirectiveModule {
}
