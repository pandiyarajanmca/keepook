import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRoutingModule } from './access-management-routing.module';
import { AccessManagementComponent } from './access-management.component';




@NgModule({
  declarations: [
    AccessManagementComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule
  ]
})
export class AccessManagementModule { }
