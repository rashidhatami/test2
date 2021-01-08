import {ChangeDetectorRef, Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {InputErrorStateMatcher} from '../../models/errorstate/input.errorstate';
import {SnackBarComponent} from '../partial/snack-bar/snack-bar.component';
import {RestDataSource} from '../../models/rest.datasource';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-print-request',
  templateUrl: './print-request.component.html',
  styleUrls: ['./print-request.component.scss']
})
export class PrintRequestComponent {
  empNoInput: string;
  matcher: InputErrorStateMatcher;
  firstSubmitEmpNo = false;
  loading: boolean;
  showPrintCard: boolean;
  file: Blob;

  constructor(public dataSource: RestDataSource, private snackBar: MatSnackBar, private ref: ChangeDetectorRef) {
    this.matcher = new InputErrorStateMatcher();
    this.loading = false;
    this.showPrintCard = false;
  }

  get titleForm(): string {
    return 'فرم چاپ درخواست';
  }

  printCard(): void {
    const fileURL = URL.createObjectURL(this.file);
    window.open(fileURL);
  }

  getEmployee(form: NgForm) {
    this.firstSubmitEmpNo = true;

    if (form.valid) {
      this.loading = true;

      this.dataSource.getRequestPrintCard(this.empNoInput).subscribe(response => {
          this.file = new Blob([response as unknown as BlobPart], { type: 'application/pdf' });
          if (this.file.size === 0){
            this.snackBar.openFromComponent(SnackBarComponent, {
                    data: 'درخواست مورد نظر یافت نگردید',
                    panelClass: 'orange-snackbar',
                    duration: 3000
                  });
            this.firstSubmitEmpNo = false;
            this.loading = false;
            this.showPrintCard = false;
            this.ref.detectChanges();
            this.file = null;
            return;
          }
          this.firstSubmitEmpNo = false;
          this.loading = false;
          this.showPrintCard = true;
          this.ref.detectChanges();
      });
    }
  }
}
