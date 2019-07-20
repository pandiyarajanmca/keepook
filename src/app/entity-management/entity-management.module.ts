import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { OrganizationComponent } from './organization/organization.component';
import { DepartmentComponent } from './department/department.component';
import { EntityRoutingModule } from './entity-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EntityManagementComponent } from './entity-management.component';


@NgModule({
  declarations: [
    CompanyComponent,
    UserGroupComponent,
    OrganizationComponent,
    DepartmentComponent,
    EntityManagementComponent],  
  imports: [
    CommonModule,
    EntityRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class EntityManagementModule { }
