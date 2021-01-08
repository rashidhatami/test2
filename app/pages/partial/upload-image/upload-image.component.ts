import {ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'upload-image',
    templateUrl: './upload-image.component.html',
    styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {
    imagePath;
    imgURL: any;
    message: string;
    statusUpload: boolean;

    constructor(private ref: ChangeDetectorRef) {
        ref.detach();
        this.statusUpload = false;
    }

    validation(): boolean {
        this.message = !this.statusUpload ? 'لطفا یک عکس را وارد نمایید.' : '';
        this.ref.detectChanges();
        return this.message.length > 1 ? true : false;
    }

    loadImage(data: string): void {
        this.imgURL = data;
        this.statusUpload = true;
        this.message = '';
        this.ref.detectChanges();
    }

    clearImage = () => {
        this.imgURL = '';
        this.statusUpload = false;
        this.message = '';
        this.ref.detectChanges();
    }

    preview(files): void {
        if (files.length === 0) {
            this.statusUpload = false;
            return;
        }

        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.statusUpload = false;
            this.imgURL = '';
            this.validation();
            return;
        }

        const reader: FileReader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);

        // tslint:disable-next-line:variable-name
        reader.onload = (_event) => {
            this.imgURL = reader.result as string;

            this.statusUpload = true;
            this.validation();
        }; // end onLoad

    }// end preview
}
