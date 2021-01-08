import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee, AllEmployee} from './employee.model';
const PROTOCOL = 'http';
const PORT = 8081;
const LOCATION = '10.21.4.74';

@Injectable()
export class RestDataSource {
    baseUrl: string;
    baseUrlLogin : string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${LOCATION}:${PORT}/api`;
        this.baseUrlLogin = `${PROTOCOL}://${LOCATION}:${PORT}`;
    }

    getUser(empNo: string): Observable<Employee> {
        return this.http.get<Employee>(`${this.baseUrl}/personal/employee/${empNo}`);
    }

    getEmployee(empNo: string): Observable<Employee> {
        return this.http.get<Employee>(`${this.baseUrl}/personal/employee/${empNo}`);
    }

    getEmployeesNoRetired(): Observable<AllEmployee[]> {
        return this.http.get<AllEmployee[]>(`${this.baseUrl}/personal/card/employee/listnoretired`);
    }

    getEmployeesRetired(): Observable<AllEmployee[]> {
        return this.http.get<AllEmployee[]>(`${this.baseUrl}/personal/card/employee/listretired`);
    }

    getRequestPrintCard(empNO: string): Observable<any>{
        return this.http.get(`${this.baseUrl}/report/printRequestCard/${empNO}`, {
            responseType: 'arraybuffer' as 'json'});
    }

    printCard(id: number): Observable<any>{
        return this.http.get(`${this.baseUrl}/report/printCard/${id}`, {
            responseType: 'arraybuffer' as 'json'});
    }

    checkDuplicateRequestCard(empNO: string): Observable<any>{
        return this.http.get(`${this.baseUrl}/personal/card/checkDuplicate/${empNO}`);
    }

    saveAcceptOrReject(ID: number, accept: number, accessgroup: number, editorid: number): Observable<any>{
        return this.http.post(`${this.baseUrl}/personal/card/UpdateAcceptRejectCard`,
        {ID,accept,accessgroup,editorid}
    );
    }

   

    saveRequestEmployee(FIRST_NM: string,
                        LAST_NM: string,
                        MOBILE_NO: string,
                        EMAIL_ADD: string,
                        DESC: string,
                        REPLICA: number,
                        FATHER: string,
                        SSN: string,
                        LICENCE: string,
                        COURSE: string,
                        PA_OM: string,
                        CH_OM: string,
                        JOB_TITLE: string,
                        JOB_CODE: string,
                        JOB_GRADE: string,
                        ZIP_CODE: string,
                        HOME_ADD: string,
                        HOME_TEL: string,
                        PANISH: string,
                        GEOWORK: number,
                        STATUS: number,
                        creatorid: number,
                        editorid: number,
                        createdate: string,
                        editdate: string,
                        accessgroup: string,
                        state_ID: number,
                        city_ID: number,
                        retired: number,
                        delivered: number,
                        state: string,
                        city: string,
                        des: string,
                        EMPLOYEE_TYPE_DESC: number,
                        REPLICA_IN_REQUEST: string,
                        OLD_PERSONAL_ID: string,
                        NATIONAL_ID: string,
                        EFINGERPRINT_IMG: string,
                        OFINGERPRINT_IMG: string,
                        PERSONAL_IMG: any,
                        CARD_PASSWORD: string,
                        EMPLOYEE_TYPE: number,
                        ACCEPT_REJECT: number,
                        CARD_PRINTED: number,
                        DATE_REQUEST: string,
                        BIRTH_CITY: string,
                        BIRTH_DATE: string,
                        EMPLOYEE_DATE: string,
                        NEW_PERSONAL_ID: string,
                        JOB_GRADE_CODE: string,
                        OFFICE_TEL: string,
                        GEOWORK_DESC: string,
                        DELIVERY_DATE: string,
                        CODE_PA_OM: number,
                        OMOR_TITLE: number) {
        const obj = {
            tcr_FIRST_NM: FIRST_NM,
            tcr_LAST_NM: LAST_NM,
            tcr_MOBILE_NO: MOBILE_NO,
            tcr_EMAIL_ADD: EMAIL_ADD,
            tcr_DESC: DESC,
            tcr_REPLICA: REPLICA,
            tcr_FATHER: FATHER,
            tcr_SSN: SSN,
            tcr_LICENCE: LICENCE,
            tcr_COURSE: COURSE,
            tcr_PA_OM: PA_OM,
            tcr_CH_OM: CH_OM,
            tcr_JOB_TITLE: JOB_TITLE,
            tcr_JOB_CODE: JOB_CODE,
            tcr_JOB_GRADE: JOB_GRADE,
            tcr_ZIP_CODE: ZIP_CODE,
            tcr_HOME_ADD: HOME_ADD,
            tcr_HOME_TEL: HOME_TEL,
            tcr_PANISH: PANISH,
            tcr_GEOWORK: GEOWORK,
            tcr_STATUS: STATUS,
            creatorid: creatorid,
            editorid: editorid,
            createdate: createdate,
            editdate: editdate,
            accessgroup: accessgroup,
            state_ID: state_ID,
            city_ID: city_ID,
            retired: retired,
            delivered: delivered,
            state: state,
            city: city,
            des: des,
            tcr_EMPLOYEE_TYPE_DESC: EMPLOYEE_TYPE_DESC,
            tcr_REPLICA_IN_REQUEST: REPLICA_IN_REQUEST,
            tcr_OLD_PERSONAL_ID: OLD_PERSONAL_ID,
            tcr_NATIONAL_ID: NATIONAL_ID,
            tcr_EFINGERPRINT_IMG: EFINGERPRINT_IMG,
            tcr_OFINGERPRINT_IMG: OFINGERPRINT_IMG,
            tcr_PERSONAL_IMG: PERSONAL_IMG,
            tcr_CARD_PASSWORD: CARD_PASSWORD,
            tcr_EMPLOYEE_TYPE: EMPLOYEE_TYPE,
            tcr_ACCEPT_REJECT: ACCEPT_REJECT,
            tcr_CARD_PRINTED: CARD_PRINTED,
            tcr_DATE_REQUEST: DATE_REQUEST,
            tcr_BIRTH_CITY: BIRTH_CITY,
            tcr_BIRTH_DATE: BIRTH_DATE,
            tcr_EMPLOYEE_DATE: EMPLOYEE_DATE,
            tcr_NEW_PERSONAL_ID: NEW_PERSONAL_ID,
            tcr_JOB_GRADE_CODE: JOB_GRADE_CODE,
            tcr_OFFICE_TEL: OFFICE_TEL,
            tcr_GEOWORK_DESC: GEOWORK_DESC,
            tcr_DELIVERY_DATE: DELIVERY_DATE,
            tcr_CODE_PA_OM: CODE_PA_OM,
            tcr_OMOR_TITLE: OMOR_TITLE,
        };

        return this.http.post(`${this.baseUrl}/personal/card/add`,
            obj
        );
        //     .subscribe(
        //     data => console.log('success', data),
        //     error => console.log('oops', error)
        // );
    }

    saveRegisterUser(
        fname : string, 
        lname : string,  
        father : string,  
        empno : string,  
        emp10 : string, 
        d_pa_om : string, 
        username : string,
        password : string,
        accessType : string, 
        geoWork : string,  
        userID : string,  
        createDate : string
        )
{
return this.http.post("http://10.21.4.74:8080/api/personal/card/add",
                            { fname : fname, 
                              lname : lname,  
                              father : father, 
                              empno : empno, 
                              emp10 : emp10,
                              tcr_REPLICA : d_pa_om, 
                              tcr_FATHER : username,  
                              tcr_SSN : password , 
                              tcr_LICENCE : accessType, 
                              tcr_COURSE : geoWork, 
                              tcr_PA_OM : userID,  
                              tcr_CH_OM : createDate
                            }
                            );
}
}
