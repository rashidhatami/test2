export class Personnel {
    constructor(
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
        public coursest?: string //رشته تحصیلی
    ){}
}

export class insertPersonel{
    tcr_FIRST_NM : string;
    tcr_LAST_NM : string;
    tcr_MOBILE_NO : string;
    tcr_EMAIL_ADD : string;
    tcr_DESC : string;
    tcr_REPLICA : number;
    tcr_FATHER : string;
    tcr_SSN : string;
    tcr_LICENCE : string;
    tcr_COURSE : string;
    tcr_PA_OM : string;
    tcr_CH_OM : string;
    tcr_JOB_TITLE : string;
    tcr_JOB_CODE : string;
    tcr_JOB_GRADE : string;
    tcr_ZIP_CODE : string;
    tcr_HOME_ADD : string;
    tcr_HOME_TEL : string;
    tcr_PANISH : string;
    tcr_GEOWORK : number;
    tcr_STATUS : number;
    creatorid : number;
    editorid : number;
    createdate : string;
    editdate : string;
    accessgroup : string;
    state_ID : number;
    city_ID : number;
    retired : number = 0;
    delivered : number;
    state : string;
    city : string;
    des : string;
    tcr_EMPLOYEE_TYPE_DESC : number;
    tcr_REPLICA_IN_REQUEST : string = "0";
    tcr_OLD_PERSONAL_ID : string;
    tcr_NATIONAL_ID : string;
    tcr_EFINGERPRINT_IMG : string;
    tcr_OFINGERPRINT_IMG : string;
    tcr_PERSONAL_IMG : any;
    tcr_CARD_PASSWORD : string;
    tcr_EMPLOYEE_TYPE : number;
    tcr_ACCEPT_REJECT : number;
    tcr_CARD_PRINTED : number;
    tcr_DATE_REQUEST : string;
    tcr_BIRTH_CITY : string;
    tcr_BIRTH_DATE : string;
    tcr_EMPLOYEE_DATE : string;
    tcr_NEW_PERSONAL_ID : string;
    tcr_JOB_GRADE_CODE : string;
    tcr_OFFICE_TEL : string;
    tcr_GEOWORK_DESC : string;
    tcr_DELIVERY_DATE : string;
    tcr_CODE_PA_OM : number;
    tcr_OMOR_TITLE : number;
}
