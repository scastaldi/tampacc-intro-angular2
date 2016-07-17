import { Injectable } from '@angular/core';
import { EmployeeModel } from './employee-model';
import { EmployeeMockData } from './employee-mock-data';
@Injectable()
export class EmployeeService {
    getEmployees<EmployeeModel> () {
        return Promise.resolve(EmployeeMockData);
    }
    getEmployeesSlow() {
        return new Promise<EmployeeModel[]>(resolve =>
            setTimeout(() => resolve(EmployeeMockData), 2000) 
        );
    }    
}