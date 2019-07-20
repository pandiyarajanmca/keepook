import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CompanyComponent } from './company/company.component';
// import { UserGroupComponent } from './user-group/user-group.component';
// import { OrganizationComponent } from './organization/organization.component';
// import { DepartmentComponent } from './department/department.component';
import { TechnicalSettingsRoutingModule } from './technical-settings-routing.module';
import { AddTemplatePropertiesComponent } from './add-template-properties/add-template-properties.component';
import { AddContractPropertiesComponent } from './add-contract-properties/add-contract-properties.component';


@NgModule({
  declarations: [
    AddTemplatePropertiesComponent,
    AddContractPropertiesComponent],
  imports: [
    CommonModule,
    TechnicalSettingsRoutingModule
  ]
})
export class TechnicalSettingsModule { }
