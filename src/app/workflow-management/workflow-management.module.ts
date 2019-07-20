import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowManagementComponent } from './workflow-management.component';
import { WorkflowRoutingModule } from './workflow-routing.module';


@NgModule({
  declarations: [WorkflowManagementComponent],
  imports: [
    CommonModule,
    WorkflowRoutingModule
  ]
})
export class WorkflowManagementModule { }
