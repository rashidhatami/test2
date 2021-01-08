import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg';
import {PagesRoutingModule} from './pages-routing.module';
import {
    NgbDropdownModule,
    NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {LayoutComponent} from './_layout/layout.component';
import {ScriptsInitComponent} from './_layout/init/scipts-init/scripts-init.component';
import {HeaderMobileComponent} from './_layout/components/header-mobile/header-mobile.component';
import {AsideComponent} from './_layout/components/aside/aside.component';
import {FooterComponent} from './_layout/components/footer/footer.component';
import {HeaderComponent} from './_layout/components/header/header.component';
import {TopbarComponent} from './_layout/components/topbar/topbar.component';
import {ExtrasModule} from '../_metronic/partials/layout/extras/extras.module';
import {CoreModule} from '../_metronic/core';
import {SubheaderModule} from '../_metronic/partials/layout/subheader/subheader.module';
import {AsideDynamicComponent} from './_layout/components/aside-dynamic/aside-dynamic.component';
import {HeaderMenuDynamicComponent} from './_layout/components/header/header-menu-dynamic/header-menu-dynamic.component';

// material angular modules
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'

// syncfusion module
import {SyncfusionModule} from './syncfusion.module';

// defined components
import {RequestEmployeeCardComponent} from './request-employee-card/request-employee-card.component';
import {RequestRetiredCardComponent} from './request-retired-card/request-retired-card.component';
import {ManagePersonnelCardComponent} from './manage-personnel-card/manage-personnel-card.component';
import {PrintRequestComponent} from './print-request/print-request.component';

//defined partial components
import {UploadImageComponent} from './partial/upload-image/upload-image.component';
import {BaseGridComponent} from './partial/base-grid/base-grid.component';
import {SnackBarComponent} from './partial/snack-bar/snack-bar.component';

//directives
import {DirectiveModule} from '../directives/directive.module';
import {ToolbarModule} from '@syncfusion/ej2-angular-navigations';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogModule} from '@syncfusion/ej2-angular-popups';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations: [
        LayoutComponent,
        ScriptsInitComponent,
        HeaderMobileComponent,
        AsideComponent,
        FooterComponent,
        HeaderComponent,
        TopbarComponent,
        AsideDynamicComponent,
        HeaderMenuDynamicComponent,
        RegistrationComponent,

        // components
        RequestEmployeeCardComponent,
        RequestRetiredCardComponent,
        ManagePersonnelCardComponent,
        PrintRequestComponent,

        // partial components
        UploadImageComponent,
        BaseGridComponent,
        SnackBarComponent
    ],
    imports: [
        DirectiveModule,
        SyncfusionModule,

        CommonModule,
        PagesRoutingModule,
        InlineSVGModule,
        ExtrasModule,
        NgbDropdownModule,
        NgbProgressbarModule,
        CoreModule,
        SubheaderModule,

        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,

        ReactiveFormsModule,
        FormsModule,
        ToolbarModule,
        MatDialogModule,
        DialogModule,
    ],
    providers: []
})
export class LayoutModule {
}
