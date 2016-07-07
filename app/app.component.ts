import { Component } from '@angular/core';
import { EmployeeListComponent } from './employeelist/employeelist.component';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: '<div>Hello Tampa Code Camp!</div><employeelist></employeelist>',
    directives: [EmployeeListComponent] 
})
export class AppComponent {}
