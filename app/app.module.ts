import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import { EmployeeService } from './employee.service';
import { EmployeeModel } from './employee-model';
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,EmployeeListComponent],
    providers: [EmployeeService,EmployeeModel],
    bootstrap: [AppComponent]
})
export class AppModule {
    //constructor(public employeeService:EmployeeService) {}
}