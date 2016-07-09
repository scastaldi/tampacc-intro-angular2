import { Component } from '@angular/core';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import { EmployeeService } from './employee.service';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: '<div>Hello Tampa Code Camp!</div><employeelist></employeelist>',
    directives: [EmployeeListComponent],
    providers: [EmployeeService]
})
export class AppComponent {
    constructor(public employeeService:EmployeeService) {}
}
