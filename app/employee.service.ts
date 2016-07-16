import { Injectable } from '@angular/core';
import { EmployeeModel } from './employee-model';
@Injectable()
export class EmployeeService {
    employeeMockData : EmployeeModel[] = [
        {id:'1', firstName:"Nikola", lastName: "Tesla", dob:'1856-07-10'},
        {id:'2', firstName:"Albert", lastName: "Einstein", dob:'1879-03-14'},
        {id:'3', firstName:"Isaac", lastName: "Newton", dob:'1643-01-04'}
    ];    
    getEmployees<EmployeeModel> () {
        return this.employeeMockData;
    }   
}