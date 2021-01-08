import {Personnel} from './personnel.model';

export class Employee extends Personnel {
    constructor(
        //base class fields
        public emp10?: string, //پرسنلی جدید
        public empno?: string,
        public fname?: string,
        public lname?: string,
        public father?: string,
        public ssn?: string,
        public brthcity?: string,
        public birthdate?: string,
        public nationalcode?: string,
        public mobile?: string,
        public homeadd?: string,
        public empdate?: string, //تاریخ استخدام
        public licence?: string, //مدرک تحصیلی
        public coursest?: string, //رشته تحصیلی

        // added fields
        public jobtitle?: string,
        public d_pa_om?: string,
        public d_ch_om?: string,
        public jobcode?: string,
        public cjobgrade?: string,
        public zipcode?: string,
        public panish?: string,
        public hometell?: string,
        public geowork?: number,

        // image
        public img?: any
    ) {
        super(emp10, empno, fname, lname, father, ssn, brthcity, birthdate, nationalcode, mobile, homeadd,
            empdate, licence, coursest);
    }
}

export class AllEmployee {
    // @ts-ignore
    constructor(
        public TCR_ID ?: number,
        public TCR_OLD_PERSONAL_ID?: string,
        public TCR_FIRST_NM ?: string,
        public TCR_LAST_NM ?: string,
        public TCR_NATIONAL_ID ?: string,
        public TCR_MOBILE_NO ?: string,
        public TCR_EMPLOYEE_TYPE?: number,
        public TCR_ACCEPT_REJECT?: number,
        public TCR_ACCEPT_REJECT_DES?: string,
        public TCR_CARD_PRINTED?: number,
        public TCR_REPLICA ?: number,
        public TCR_REPLICA_DES ?: string,
        public TCR_DATE_REQUEST?: string,
        public TCR_NEW_PERSONAL_ID?: string,
        public TCR_PA_OM?: string,
        public TCR_CH_OM?: string,
        public TCR_ZIP_CODE?: string,
        public TCR_HOME_ADD?: string,
        public tcr_OLD_PERSONAL_ID?: string,
        public tcr_NATIONAL_ID?: string,
        public tcr_EMPLOYEE_TYPE?: number,
        public tcr_EMPLOYEE_TYPE_DES?: string,
        public tcr_ACCEPT_REJECT?: number,
        public tcr_CARD_PRINTED?: number,
        public tcr_CARD_PRINTED_DES?: string,
        public tcr_ID?: number,
        public tcr_FIRST_NM?: string,
        public tcr_LAST_NM?: string,
        public tcr_MOBILE_NO?: string,
        public tcr_REPLICA?: number,
        public tcr_PA_OM?: string,
        public tcr_CH_OM?: string,
        public tcr_ZIP_CODE?: string,
        public tcr_HOME_ADD?: string,
        public tcr_NEW_PERSONAL_ID?: string,
        public tcr_DELIVERY_DATE ?: string,
        public RETIRED?: number,
        public RETIRED_DES?: string,
        ) {
    }
}



