import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TechnicalSettingsRoutingModule } from './technical-settings-routing.module';
import { AddTemplatePropertiesComponent } from './add-template-properties/add-template-properties.component';
import { AddContractPropertiesComponent } from './add-contract-properties/add-contract-properties.component';
import { TechnicalSettingsComponent } from './technical-settings.component';
import { AddDataSourceComponent } from './add-data-source/add-data-source.component';
import { TechnicalSidebarComponent } from './technical-sidebar/technical-sidebar.component';

@NgModule({
  declarations: [
    AddTemplatePropertiesComponent,
    AddContractPropertiesComponent,
    AddDataSourceComponent,
    TechnicalSidebarComponent,
    TechnicalSettingsComponent],
  imports: [
    CommonModule,
    TechnicalSettingsRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class TechnicalSettingsModule { }
