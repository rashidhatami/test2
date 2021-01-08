import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorsComponent } from './errors.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorsComponent,
    children: [
      {
        path: 'error',
        component: ErrorComponent,
      },
      { path: '', redirectTo: 'error', pathMatch: 'full' },
      {
        path: '**',
        component: ErrorComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsRoutingModule {}
