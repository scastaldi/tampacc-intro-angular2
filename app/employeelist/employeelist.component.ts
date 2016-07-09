import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../employee-model';
import { EmployeeService } from '../employee.service';
@Component({
  moduleId: module.id,
  selector: 'employeelist',
  templateUrl: 'employeelist.template.html'
})
export class EmployeeListComponent implements OnInit {
  employees : EmployeeModel[]; 
  constructor(private employeeService : EmployeeService){}
  getEmployees():any {
     this.employeeService.getEmployeesSlow().then(e => this.employees = e);
  }
  ngOnInit(){
    this.employees = this.getEmployees();
  }
}