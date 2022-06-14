import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';

const routes: Routes = [
  { path:"", component:GetEmployeeComponent },
  { path:"save", component:SaveEmployeeComponent },
  { path:"update/:id", component:EditEmployeeComponent },
  { path:"delete/:id", component:DeleteEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
