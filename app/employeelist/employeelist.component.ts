import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'employeelist',
  templateUrl: 'employeelist.template.html',
  styles: [],
  directives: []
})
export class EmployeeListComponent {
  employees = ['Sara', 'Alexa', 'Alexandra'];
}