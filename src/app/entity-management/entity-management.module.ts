import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { OrganizationComponent } from './organization/organization.component';
import { DepartmentComponent } from './department/department.component';
import { EntityRoutingModule } from './entity-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EntityManagementComponent } from './entity-management.component';
import { EntitySidebarComponent } from './entity-sidebar/entity-sidebar.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { ViewCompanyComponent } from './company/view-company/view-company.component';
import { EntityService } from '../_serives/entity.service';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CommonModulesModule } from '../common-module/common-module';



@NgModule({
  declarations: [
    CompanyComponent,
    UserGroupComponent,
    OrganizationComponent,
    DepartmentComponent,
    EntityManagementComponent,
    EntitySidebarComponent,
    EditCompanyComponent,
    ViewCompanyComponent,
  
    ],  
  imports: [
    CommonModule,    
    CommonModulesModule,
    EntityRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFileUploaderModule, 
    
  ],
  providers:[
    EntityService
  ]
})
export class EntityManagementModule { }
