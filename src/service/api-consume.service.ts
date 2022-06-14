import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumeService {

  constructor(private http:HttpClient) { }

  getAllEmployees(){
    return this.http.get("http://localhost:8080/employee/employees");
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>("http://localhost:8080/employee/id/"+id);
  }

  saveEmployee(data:Employee):Observable<Employee>{
    return this.http.post<Employee>("http://localhost:8080/employee/",data);
  }

  updateEmployee(data:Employee):Observable<Employee>{
    return this.http.post<Employee>("http://localhost:8080/employee/",data);
  }

  deleteEmployee(id:number){
    return this.http.delete("http://localhost:8080/employee/id/"+id,{responseType:'text'});
  }
}
