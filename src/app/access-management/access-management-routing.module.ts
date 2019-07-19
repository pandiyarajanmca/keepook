import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessManagementComponent } from './access-management.component';
const routes: Routes = [
  { path: ' ', component: AccessManagementComponent}
  // { path: 'company', component: CompanyComponent},
  // { path: 'organization', component: OrganizationComponent},
  // { path: 'department', component: DepartmentComponent},
  // { path: 'user-groups', component: UserGroupComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AccessRoutingModule { }
