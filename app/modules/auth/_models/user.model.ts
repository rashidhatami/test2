import { AuthModel } from './auth.model';
import { AddressModel } from './address.model';
import { SocialNetworksModel } from './social-networks.model';

export class UserModel extends AuthModel {
  userId: number;
  username: string;
  fullname: string;
  email: string;
  password: string;
  pic: string;
  workGroups: number[];
  accessGroup: number;
  personalCode: string;
  firstName: string;
  lastName: string;
  job: string;
  img: any[];
  
  
  setUser(user: any) {
    this.userId = user.userId;
    this.password = user.password;
    this.username = user.username || '';
    this.fullname = user.fullname || '';
    this.email = user.email || '';
    this.pic = user.pic || './assets/media/users/default.jpg';
    this.workGroups = user.workGroups || [];
    this.accessGroup = user.accessGroup || '';
    this.personalCode = user.personalCode || '';
    this.lastName = user.lastName;
    this.firstName = user.firstName;
    this.img = user.img;
    this.job = user.job;
  }
}
