import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

  assigned: Employee;

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
      this.getEmployees();
  }
  getEmployees(): void {
      this.employeeService.getEmployees().subscribe(emps => this.employees = emps);
  }
  add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.employeeService.addEmployee({ name } as Employee)
        .subscribe(employee => {
          this.employees.push(employee);
        });
    }
  delete(employee: Employee): void {
      this.employees = this.employees.filter(h => h !== employee);
      this.employeeService.deleteEmployee(employee).subscribe();
    }
  onSelect(employee: Employee): void {
      this.assigned = employee;
  }
}
