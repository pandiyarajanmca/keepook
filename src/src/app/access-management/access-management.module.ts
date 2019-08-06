import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessRoutingModule } from './access-management-routing.module';
import { AccessManagementComponent } from './access-management.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AccessManagementComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class AccessManagementModule { }
