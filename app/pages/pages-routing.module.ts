import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';
import { RequestEmployeeCardComponent } from './request-employee-card/request-employee-card.component';
import { RequestRetiredCardComponent } from './request-retired-card/request-retired-card.component';
import { ManagePersonnelCardComponent } from './manage-personnel-card/manage-personnel-card.component';
import { PrintRequestComponent } from './print-request/print-request.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'requestEmployeeCard',
        component: RequestEmployeeCardComponent
      },
      {
        path: 'requestRetiredCard',
        component: RequestRetiredCardComponent
      },
      {
        path: 'managePersonnelCard',
        component: ManagePersonnelCardComponent
      },
      {
          path: 'printRequest',
          component: PrintRequestComponent
      },
      {
        path: 'registerUser',
        component: RegistrationComponent
      },
      {
        path: '',
        redirectTo: 'managePersonnelCard',
        pathMatch: 'full',
      },
      {
        path: 'error',
        loadChildren: () =>
            import('../modules/errors/errors.module').then((m) => m.ErrorsModule),
      },
      {
        path: '**',
        redirectTo: '/error',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
