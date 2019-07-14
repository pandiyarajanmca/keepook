import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { OrganizationComponent } from './organization/organization.component';
import { DepartmentComponent } from './department/department.component';
import { EntityRoutingModule } from './entity-routing.module';


@NgModule({
  declarations: [
    CompanyComponent,
    UserGroupComponent,
    OrganizationComponent,
    DepartmentComponent],
  imports: [
    CommonModule,
    EntityRoutingModule
  ]
})
export class EntityManagementModule { }
