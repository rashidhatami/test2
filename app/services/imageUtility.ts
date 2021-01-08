import {DomSanitizer} from '@angular/platform-browser';
import {Injectable} from '@angular/core';

@Injectable()
export class ImageUtility {
    constructor(private sanitizer: DomSanitizer) {
    }

    convertNumber_2_Blob(blob: number[]): Blob {
        const bytes = new Uint8Array(blob.length);
        for (let i = 0; i < blob.length; i++) {
            bytes[i] = blob[i];
        }
        return new Blob([bytes]);
    }

    // get image
    convertB64_2_Image(imgData: string): string {
        return this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${imgData}`)['changingThisBreaksApplicationSecurity'];
    }

    convertB64_2_Blob(b64Data: string): Blob {
        const byteString = atob(b64Data.split(',')[1]);
        const mimeString = b64Data.split(',')[0].split(':')[1].split(';')[0];

        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);

        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ab], {type: mimeString});
    }

    convertBlob_2_B64(blob: Blob, cb): any {
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = (reader.result as string).split(',')[1];
            cb(base64);
        };
        reader.readAsDataURL(blob);
    }

    convertB64_2_Byte(b64Data: string): any[] {
        // tslint:disable-next-line:variable-name
        const binary_string = window.atob(b64Data.split(',')[1]);
        const len = binary_string.length;
        const bytes = new Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }

        return bytes;
    }
}
