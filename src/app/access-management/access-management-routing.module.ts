import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessManagementComponent } from './access-management.component';
const routes: Routes = [
  { path: '', component: AccessManagementComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AccessRoutingModule { }
