import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'entity-management',
    loadChildren: '../app/entity-management/entity-management.module#EntityManagementModule'
  },
  {
    path: 'access-management',
    loadChildren: '../app/access-management/access-management.module#AccessManagementModule'
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
