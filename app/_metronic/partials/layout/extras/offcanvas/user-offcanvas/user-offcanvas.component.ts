import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../../core';
import { Observable } from 'rxjs';
import { UserModel } from '../../../../../../modules/auth/_models/user.model';
import { AuthService } from '../../../../../../modules/auth/_services/auth.service';
import {ImageUtility} from '../../../../../../services/imageUtility';

@Component({
  selector: 'app-user-offcanvas',
  templateUrl: './user-offcanvas.component.html',
  styleUrls: ['./user-offcanvas.component.scss'],
})
export class UserOffcanvasComponent implements OnInit {
  extrasUserOffcanvasDirection = 'offcanvas-right';
  user$: Observable<UserModel>;
  imgProfile = './assets/media/users/default.jpg';

  constructor(private layout: LayoutService, private auth: AuthService, public imageUtility: ImageUtility) {}

  ngOnInit(): void {
    this.extrasUserOffcanvasDirection = `offcanvas-${this.layout.getProp(
      'extras.user.offcanvas.direction'
    )}`;
    this.user$ = this.auth.currentUserSubject.asObservable();
    let img=JSON.parse(localStorage.getItem("user"))['img'];

    if (img != null && img.length !== 0) {
      this.imageUtility.convertBlob_2_B64(this.imageUtility.convertNumber_2_Blob(img),
          (imgDataParam) => {
              const imgData = this.imageUtility.convertB64_2_Image(imgDataParam);
              this.imgProfile= imgData;
          });
  }

  }

  logout() {
    this.auth.logout();
    document.location.reload();
  }
}
