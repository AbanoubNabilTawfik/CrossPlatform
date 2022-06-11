import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CobtactInfoComponent } from './cobtact-info/cobtact-info.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { OverviewComponent } from './overview/overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:EmployeeDetailsComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'departments',component:DepartmentListComponent},
  {
  path:'department/:id',
  component:DepartmentDetailsComponent,
  children:[
    {path:'overview',component:OverviewComponent},
    {path:'info',component:CobtactInfoComponent}
  ]
},
  {path:'**',component:PageNotFoundComponent},
];
//localhost://4200/department/1/overview
//localhost://4200/department/1/info

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
