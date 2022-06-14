import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConsumeService } from 'src/service/api-consume.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  id:number;

  constructor(private service:ApiConsumeService, private activedRoute:ActivatedRoute,
    private router:Router) { 
    activedRoute.params.subscribe((data)=>{
      this.id = data.id;
    });
  }

  ngOnInit(): void {
    this.deleteEmployee();
  }

  deleteEmployee(){
    this.service.deleteEmployee(this.id).subscribe(data=>{
      console.log(data);
      this.router.navigate(['']);
    },
      err=>{
        console.log(err)
      })
  }
}
