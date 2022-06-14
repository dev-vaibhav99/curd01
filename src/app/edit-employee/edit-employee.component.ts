import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConsumeService } from 'src/service/api-consume.service';
import { Employee } from '../employee';
import { GetEmployeeComponent } from '../get-employee/get-employee.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private service:ApiConsumeService,
    private activateRoute:ActivatedRoute,
    private router:Router) { }

  employee:Employee = new Employee();
  id:number;
  ngOnInit(): void {
   this.activateRoute.params.subscribe(data => {
    this.id = data.id;
  });

  this.getEmployeeById(this.id);
  }

  getEmployeeById(id:number){
    this.service.getEmployeeById(this.id).subscribe(data => {      
      this.employee = data;
    },err=>{
      console.log(err);
      
    })
  }

  updateEmployee(){
    this.service.updateEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.router.navigate(['']);
    },
    err=>{
      console.log(err);
    });
    
  }
}
