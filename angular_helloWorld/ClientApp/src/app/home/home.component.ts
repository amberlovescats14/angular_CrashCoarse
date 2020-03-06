import { Component } from '@angular/core';
import { EmployeeComponent } from '../components/EmployeeComponent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  name: string = 'Amber';
  title: string = 'Application Developer'

  getPerson() {
    return `${this.name} is a ${this.title}`;
  }
}
