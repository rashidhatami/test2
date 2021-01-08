import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DialogComponent} from '@syncfusion/ej2-angular-popups';
import {
    ExcelExportProperties,
    GridComponent,
    SaveEventArgs,
    EditSettingsModel,
    ToolbarItems,
    PageSettingsModel
} from '@syncfusion/ej2-angular-grids';
import {FormGroup} from '@angular/forms';
import {ClickEventArgs} from '@syncfusion/ej2-angular-navigations';
import {BaseGridComponent} from '../partial/base-grid/base-grid.component';
import {AllEmployee} from '../../models/employee.model';
import {RestDataSource} from '../../models/rest.datasource';
import {EmitType} from '@syncfusion/ej2-base';
import {QueryCellInfoEventArgs, RowSelectEventArgs} from '@syncfusion/ej2-angular-grids';
import {TypeCard} from '../../models/typeCard.model';
import {StatusPrint} from '../../models/statusPrint.model';
import {DuplicateCard} from '../../models/duplicateCard.model';
import {StatusAccepted} from '../../models/statusAccepted';
import {SnackBarComponent} from '../partial/snack-bar/snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {StatusEmployment} from '../../models/statusEmployment';

@Component({
    selector: 'app-manage-personnel-card',
    templateUrl: './manage-personnel-card.component.html',
    styleUrls: ['./manage-personnel-card.component.scss'],
})

export class ManagePersonnelCardComponent extends BaseGridComponent implements OnInit {
    pageSettings: PageSettingsModel;
    editSettings: EditSettingsModel;
    toolbar: ToolbarItems[] | object;
    loadedData: boolean;
    acceptTitle = 'تایید';
    selectedRecord: AllEmployee;
    public data: Array<AllEmployee>;
    public pageOptions: any;
    public showAccept: boolean;
    public acceptLoading: boolean;
    public animationSettings = {effect: 'Zoom', duration: 400, delay: 0};
    public showCloseIcon = true;

    @ViewChild('personnelForm')
    personnelForm: FormGroup;

    @ViewChild('grid')
    public grid: GridComponent;

    @ViewChild('ejDialog') ejDialog: DialogComponent;
    @ViewChild('container', {read: ElementRef}) container: ElementRef;
    public targetElement: HTMLElement;

    @ViewChild('ejDialogDetails') ejDialogDetails: DialogComponent;
    @ViewChild('containerDetails', {read: ElementRef}) containerDetails: ElementRef;
    public targetElementDetails: HTMLElement;

    ngOnInit(): void {
        this.pageSettings = {pageSize: 20};
        this.loadedData = false;
        this.showAccept = true;
        this.acceptLoading = false;
        this.selectedRecord = new AllEmployee();
    }

    showSnackBar = (title: string) => {
        this.snackBar.openFromComponent(SnackBarComponent, {
            data: title,
            panelClass: 'orange-snackbar',
            duration: 3000
        });
    }

    toggleEnableDialogButtons = status => {
        const buttons = document.querySelectorAll('.e-footer-content button');
        buttons.forEach(item => item['disabled'] = status);
    }

    customiseCell(args: QueryCellInfoEventArgs) {
        if (args.column.field === 'tcr_CARD_PRINTED_DES') {
            if (args.data[args.column.field] === 'چاپ نشده') {
                args.cell.classList.add('red');
            } else if (args.data[args.column.field] === 'چاپ شده') {
                args.cell.classList.add('green');
            }// end else
        }// end if

        if (args.column.field === 'TCR_ACCEPT_REJECT_DES') {
            if (args.data[args.column.field] === 'عدم تایید') {
                args.cell.classList.add('red');
            } else if (args.data[args.column.field] === 'تایید') {
                args.cell.classList.add('green');
            }// end else if
            else  {
                args.cell.classList.add('blue');
            }// end else
        }// end if
    }

    public hideDialog: EmitType<object> = () => {
        this.ejDialog.hide();
    }

    public hideDialogDetails: EmitType<object> = () => {
        this.ejDialogDetails.hide();
    }

    openDialog() {
        this.ejDialog.show();
        document.querySelector('#dialog_dialog-header > button > span')['style']['color'] = 'white';
        const buttons = document.querySelectorAll('.e-dialog .e-footer-content .e-btn');
        buttons.forEach(item => item['style']['paddingBottom'] = '8px');
    }

    openDialogDetails() {
        this.ejDialogDetails.show();
        document.querySelector('#dialogDetails_dialog-header > button > span')['style']['color'] = 'white';
        const buttons = document.querySelectorAll('.e-dialog .e-footer-content .e-btn');
        buttons.forEach(item => item['style']['paddingBottom'] = '8px');
        buttons.forEach(item => item['style']['paddingBottom'] = '8px');
    }

    constructor(private dataSource: RestDataSource, private snackBar: MatSnackBar, public dialog: MatDialog,
                private ref: ChangeDetectorRef) {
        super();

        this.dataSource.getEmployeesNoRetired().subscribe(dataReceived => {
            dataReceived = dataReceived.map(item => (
                {
                    ...item,
                    tcr_EMPLOYEE_TYPE_DES: new TypeCard().getViewValue(item.TCR_EMPLOYEE_TYPE),
                    tcr_CARD_PRINTED_DES: new StatusPrint().getViewValue(item.tcr_CARD_PRINTED),
                    TCR_REPLICA_DES: new DuplicateCard().getViewValue(item.TCR_REPLICA),
                    TCR_ACCEPT_REJECT_DES: new StatusAccepted().getViewValue(item.TCR_ACCEPT_REJECT),
                    RETIRED_DES: new StatusEmployment().getViewValue(item.RETIRED),
                    // tslint:disable-next-line:max-line-length
                    tcr_DELIVERY_DATE: item.tcr_DELIVERY_DATE == null || item.tcr_DELIVERY_DATE === '0' ? 'قبل از سال 99' : item.tcr_DELIVERY_DATE
                }
            ));

            this.data = dataReceived;
            this.grid.refresh();
            this.loadedData = true;
        });
    }

    rowSelected(args: RowSelectEventArgs): void {
            this.selectedRecord = args.data as AllEmployee;
            this.showAccept = args.data['TCR_ACCEPT_REJECT_DES'] !== 'تحت بررسی' ? true : false;
    }

    clickHandler(args: ClickEventArgs): void {
        const target: HTMLElement = (args.originalEvent.target as HTMLElement).closest('button'); // find clicked button
        if (target.id === 'accept') {
            if (this.showAccept) {
                this.showSnackBar('امکان درخواست تایید برای رکورد مورد نظر وجود ندارد');
                return;
            }
            this.acceptTitle = 'تایید';
            this.openDialog();
            this.ref.detectChanges();
        } else if (target.id === 'reject') {
            if (this.showAccept) {
                this.showSnackBar('امکان درخواست عدم تایید برای رکورد مورد نظر وجود ندارد');
                return;
            }
            this.acceptTitle = 'عدم تایید';
            this.openDialog();
            this.ref.detectChanges();
        } else if (target.id === 'excel') {
            const excelExportProperties: ExcelExportProperties = {
                theme:
                    {
                        header: {backColor: '#ef8d41', bold: true, fontName: 'Tahoma', fontColor: '#4a4848'},
                        record: {fontName: 'Tahoma'},
                        caption: {fontName: 'Tahoma'}
                    }
            };

            this.loadedData = false;
            this.grid.excelExport(excelExportProperties);
            this.showSnackBar('درخواست با موفقیت ثبت گردید');
            //this.loadedData = true;
        } else if (target.id === 'details') {
            if (this.selectedRecord.tcr_ID != null) {
                this.openDialogDetails();
            }
        }
        else if (target.id === 'printCard') {
            if (this.selectedRecord.tcr_ID != null) {
                if (this.selectedRecord.TCR_ACCEPT_REJECT === 0 || this.selectedRecord.TCR_ACCEPT_REJECT === 2) {
                    this.showSnackBar('امکان درخواست چاپ برای رکورد مورد نظر وجود ندارد');
                    return;
                }

                else if (this.selectedRecord.tcr_CARD_PRINTED === 1) {
                    this.showSnackBar('کارت قبلا چاپ شده است');
                    return;
                }

                this.dataSource.printCard(this.selectedRecord.tcr_ID).subscribe(response => {
                    let file = new Blob([response as unknown as BlobPart], { type: 'application/pdf' });
                    if (file.size === 0){
                      this.snackBar.openFromComponent(SnackBarComponent, {
                              data: 'درخواست مورد نظر یافت نگردید',
                              panelClass: 'orange-snackbar',
                              duration: 3000
                            });
        
                    return;
                    }
                    const fileURL = URL.createObjectURL(file);
                    window.open(fileURL)
                });
            }
        }
    }

    actionBegin(args: SaveEventArgs): void {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            // this.personnelData = Object.assign({}, args.rowData);
        }
        if (args.requestType === 'save') {
            if (this.personnelForm.valid) {
                // args.data = this.personnelData;
            } else {
                args.cancel = true;
            }
        }
    }

    public acceptDialog: EmitType<object> = () => {
        this.acceptLoading = true;
        this.ref.detectChanges();
        this.toggleEnableDialogButtons(true);
        const status = this.acceptTitle === 'تایید' ? 1 : 0;

        let user = JSON.parse(localStorage.getItem("user"));
        this.dataSource.saveAcceptOrReject(this.selectedRecord.tcr_ID, status == 1 ? 1 : 2, 
        user['accessGroup'],
        user['userId']
        ).subscribe(data => {
            this.acceptLoading = false;
            this.toggleEnableDialogButtons(false);
            this.ejDialog.hide();
            this.showSnackBar('درخواست با موفقیت انجام گردید');

            this.grid.dataSource = null;
            this.grid.refresh(); 
            this.loadedData = false;
            this.ref.detectChanges();
           
            this.dataSource.getEmployeesNoRetired().subscribe(dataReceived => {
                dataReceived = dataReceived.map(item => (
                    {
                        ...item,
                        tcr_EMPLOYEE_TYPE_DES: new TypeCard().getViewValue(item.TCR_EMPLOYEE_TYPE),
                        tcr_CARD_PRINTED_DES: new StatusPrint().getViewValue(item.tcr_CARD_PRINTED),
                        TCR_REPLICA_DES: new DuplicateCard().getViewValue(item.TCR_REPLICA),
                        TCR_ACCEPT_REJECT_DES: new StatusAccepted().getViewValue(item.TCR_ACCEPT_REJECT),
                        RETIRED_DES: new StatusEmployment().getViewValue(item.RETIRED),
                        // tslint:disable-next-line:max-line-length
                        tcr_DELIVERY_DATE: item.tcr_DELIVERY_DATE == null || item.tcr_DELIVERY_DATE === '0' ? 'قبل از سال 99' : item.tcr_DELIVERY_DATE
                    }
                ));
    
                this.data = dataReceived;
                this.grid.refresh();
                this.loadedData = true;
            });
        });
    };

    buttons = [
        {
            click: this.acceptDialog.bind(this),
            buttonModel: {
                content: 'ذخیره',
                disabled: this.acceptLoading
            }
        },
        {
            click: this.hideDialog.bind(this),
            buttonModel: {
                content: 'انصراف',
                disabled: this.acceptLoading
            }
        }
    ];

    buttonsDetail = [
        {
            click: this.hideDialogDetails.bind(this),
            buttonModel: {
                content: 'بازگشت'
            }
        }
    ];
}
