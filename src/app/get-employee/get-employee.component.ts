import { Component, OnInit } from '@angular/core';
import { ApiConsumeService } from 'src/service/api-consume.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  constructor(private service:ApiConsumeService) { }

  employees:any;

  ngOnInit(): void {
    console.log("employee Running");
    
    this.service.getAllEmployees().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
    
  }

}
