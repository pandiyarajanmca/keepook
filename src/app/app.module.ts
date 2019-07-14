import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EntityManagementModule } from './entity-management/entity-management.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntityManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
