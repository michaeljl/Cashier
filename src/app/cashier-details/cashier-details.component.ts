import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';

import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-cashier-details',
  templateUrl: './cashier-details.component.html',
  styleUrls: ['./cashier-details.component.css']
})
export class CashierDetailsComponent implements OnInit {

  @Input() assigned: Employee;
  constructor(private route: ActivatedRoute,
          private employeeService: EmployeeService,
          private location: Location
          ) { }

  ngOnInit():void {
      this.getEmployee();
  }
  getEmployee(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.employeeService.getEmployee(id)
        .subscribe(employee => this.assigned = employee);
  }
  goBack(): void {
      this.location.back();
    }
  save(): void {
      this.employeeService.updateEmployee(this.assigned)
        .subscribe(() => this.goBack());
    }
}
