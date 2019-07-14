import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { DepartmentComponent } from './department/department.component';
const routes: Routes = [
  { path: ' ', component: CompanyComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'organization', component: CompanyComponent},
  { path: 'department', component: DepartmentComponent},
  { path: 'user-groups', component: UserGroupComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class EntityRoutingModule { }
