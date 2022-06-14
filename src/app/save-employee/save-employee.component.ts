import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiConsumeService } from 'src/service/api-consume.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-save-employee',
  templateUrl: './save-employee.component.html',
  styleUrls: ['./save-employee.component.css']
})
export class SaveEmployeeComponent implements OnInit {
  employee:Employee = new Employee();
  
  constructor(private  service:ApiConsumeService) { }

  saveEmployee(data:NgForm){
    console.log(data.value)
    this.service.saveEmployee(this.employee).subscribe(
      data=>{console.log(data)},
      err=>{console.log(err)});
  }

  ngOnInit(): void {
    
  }

}
