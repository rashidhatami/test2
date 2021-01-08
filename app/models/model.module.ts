import { NgModule } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { DataService } from './dataSource';

@NgModule({
    imports: [HttpClientModule],
    providers: [RestDataSource, DataService]
})
export class ModelModule { }
