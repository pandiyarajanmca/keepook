import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'entity-management',
    loadChildren: '../app/entity-management/entity-management.module#EntityManagementModule'
  },
  {
    path: 'technical-settings',
    loadChildren: '../app/technical-settings/technical-settings.module#TechnicalSettingsModule'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
