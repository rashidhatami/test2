import { Injectable } from '@angular/core';
import { DataStateChangeEventArgs, Sorts, DataResult } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Employee} from './employee.model';

@Injectable()
export class DataService extends Subject<DataStateChangeEventArgs> {
    private BASE_URL = 'http://10.21.4.74:8081/api/personal/employee/list';

    public gridState: any;

    constructor(private http: HttpClient) {
        super();
    }

    public execute(state: any): void {
        this.getData(state).subscribe(x => super.next(x));
    }

    protected getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
        const pageQuery = `skip=${state.skip}&take=${state.take}`;
        let sortQuery = '';
        this.gridState = state;
        if ((state.sorted || []).length) {
            sortQuery = `&$orderby=` + state.sorted.map((obj: Sorts) => {
                return obj.direction === 'descending' ? `${obj.name} desc` : obj.name;
            }).reverse().join(',');
        }

        return this.http
            .get<Employee[]>(`${this.BASE_URL}?${pageQuery}${sortQuery}`)
            .map((response: any) => ({
                result: response,
                count: 100, // change
            } as DataResult))
            .map((data: any) => {
                return data;
            });
    }
}
