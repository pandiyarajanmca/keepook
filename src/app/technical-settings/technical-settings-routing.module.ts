import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnicalSettingsComponent } from './technical-settings.component';
import { AddContractPropertiesComponent } from './add-contract-properties/add-contract-properties.component';
import { AddDataSourceComponent } from './add-data-source/add-data-source.component';
import { AddTemplatePropertiesComponent } from './add-template-properties/add-template-properties.component';
const routes: Routes = [
  { path: '', component: TechnicalSettingsComponent},
  { path: 'add-contract-properties', component: AddContractPropertiesComponent },
  { path: 'add-data-source', component: AddDataSourceComponent},
  { path: 'add-template-properties', component: AddTemplatePropertiesComponent},  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TechnicalSettingsRoutingModule { }
