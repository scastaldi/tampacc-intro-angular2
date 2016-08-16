import { Component, OnInit, Pipe } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from '../employee-model';
@Component({
  moduleId: module.id,
  selector: 'employeelist',
  templateUrl: 'employeelist.template.html'
})
export class EmployeeListComponent implements OnInit {
  employees : EmployeeModel[]; 
  orderColumn:string='firstName';
  constructor(private employeeService : EmployeeService){}
  getEmployees():any {
     this.employeeService.getEmployeesSlow().then(e => this.employees = e);
  }
  ngOnInit(){
    this.employees = this.getEmployees();
  }
}