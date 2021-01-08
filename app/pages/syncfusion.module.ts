import { NgModule } from '@angular/core';
import { GridModule,
         PageService,
         SortService,
         FilterService,
         GroupService,
         EditService,
         ToolbarService ,
         ExcelExportService } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
    declarations: [],
    imports: [
        GridModule,
        DropDownListAllModule,
        NumericTextBoxModule,
        DatePickerAllModule,
    ],
    providers: [
        EditService,
        ToolbarService,
        PageService,
        SortService,
        FilterService,
        GroupService,
        ExcelExportService
    ],
    exports: [
        GridModule,
        DropDownListAllModule,
        NumericTextBoxModule,
        DatePickerAllModule,
    ]
})
export class SyncfusionModule { }
