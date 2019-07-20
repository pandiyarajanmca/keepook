import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EntityManagementModule } from './entity-management/entity-management.module';
import { TechnicalSettingsModule } from './technical-settings/technical-settings.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { TechnicalSettingsComponent } from './technical-settings/technical-settings.component';
import { AddDataSourceComponent } from './technical-settings/add-data-source/add-data-source.component';
import { AccessManagementModule } from './access-management/access-management.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WorkflowManagementModule } from './workflow-management/workflow-management.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    
    // TechnicalSettingsComponent,
    AddDataSourceComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntityManagementModule,
    TechnicalSettingsModule,
    AccessManagementModule,
    WorkflowManagementModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
