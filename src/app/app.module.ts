import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RootFormComponent } from './root-form/root-form.component';
import { SAdminFormComponent } from './s-admin-form/s-admin-form.component';
import { AdminFormComponent } from './admin-form/admin-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RootFormComponent,
    SAdminFormComponent,
    AdminFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
