import { Component } from '@angular/core';
import { EmployeeComponent } from '../components/EmployeeComponent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  name: string = 'Amber';
  title: string = 'Application Developer'
  show: boolean = false;

  //[class]="classesToApply"
  classesToApply: string = 'boldClass italicClass';

  getPerson() {
    return `${this.name} is a ${this.title}`;
  }

  handleClick() : void {
    console.log('Button clicked')
    this.show = !this.show
  }
}
