import { Component } from "@angular/core";

@Component({
  selector: 'swbc-employee',
  templateUrl: './employee.template.html',
  styleUrls: ['../style/employee.css']
})

 export class EmployeeComponent {
    employer: string = 'SWBC';
}