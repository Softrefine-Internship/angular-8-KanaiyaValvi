import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  employeesData: Employee[] = [];
  pageNumberOption: number[] = [];
  pageNumber: number = 1;
  rowOption: number[] = [5, 10, 15, 20];
  totalRows: number = 5;

  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    this.employeesData = this.employeeService.getEmployees();
    this.countPage();
  }

  onRowChange(event: any) {
    this.totalRows = +event.target?.value;
    this.countPage();
  }
  
  countPage() {
    const page = Math.ceil(this.employeesData.length / this.totalRows);
    this.pageNumberOption = [...new Array(page)].map((_, i) => i + 1);
    if (!this.pageNumberOption.includes(+this.pageNumber)) {
      this.pageNumber = this.pageNumberOption.length;
    }
  }
}
