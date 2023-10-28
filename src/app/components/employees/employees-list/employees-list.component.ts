import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employees: Employee[] = [
    {
      id: '1',
      name: 'abc',
      email: 'abc@gmail.com',
      phone: 1234567,
      salary:  100000,
      department: 'software'
    },
    {
      id: '2',
      name: 'def',
      email: 'def@gmail.com',
      phone: 1234567,
      salary:  100000,
      department: 'software'
    },
    {
      id: '3',
      name: 'hij',
      email: 'hij@gmail.com',
      phone: 1234567,
      salary:  100000,
      department: 'software'
    }
  ];

  ngOnInit(): void {
    
  }

}
