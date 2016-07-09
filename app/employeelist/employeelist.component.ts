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
  getEmployees():EmployeeModel[] {
    return this.employeeService.getEmployees();
  }
  ngOnInit(){
    this.employees = this.getEmployees();
  }
}