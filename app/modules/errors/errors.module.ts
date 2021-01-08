import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ErrorsRoutingModule} from './errors-routing.module';
import {ErrorsComponent} from './errors.component';
import {ErrorComponent} from './error/error.component';
@NgModule({
  declarations: [ ErrorsComponent, ErrorComponent ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule {}
