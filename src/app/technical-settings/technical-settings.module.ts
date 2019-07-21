import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalSettingsRoutingModule } from './technical-settings-routing.module';
import { AddTemplatePropertiesComponent } from './add-template-properties/add-template-properties.component';
import { AddContractPropertiesComponent } from './add-contract-properties/add-contract-properties.component';
import { TechnicalSettingsComponent } from './technical-settings.component';


@NgModule({
  declarations: [
    AddTemplatePropertiesComponent,
    AddContractPropertiesComponent,
    TechnicalSettingsComponent],
  imports: [
    CommonModule,
    TechnicalSettingsRoutingModule
  ]
})
export class TechnicalSettingsModule { }
