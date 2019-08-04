import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { DepartmentComponent } from './department/department.component';
import { OrganizationComponent } from './organization/organization.component';
import { EntityManagementComponent } from './entity-management.component';
import { ViewCompanyComponent } from './company/view-company/view-company.component';

const routes: Routes = [
  { path: '', component: EntityManagementComponent},
  { path: 'add-company', component: CompanyComponent},
  { path: 'edit-view-company', component: ViewCompanyComponent},
  { path: 'edit-view-organization', component: ViewCompanyComponent},
  { path: 'edit-view-department', component: ViewCompanyComponent},
  { path: 'edit-view-user-groups', component: ViewCompanyComponent},
  { path: 'add-organization', component: OrganizationComponent},
  { path: 'add-department', component: DepartmentComponent},
  { path: 'add-user-groups', component: UserGroupComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class EntityRoutingModule { }
