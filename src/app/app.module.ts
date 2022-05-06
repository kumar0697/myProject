import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RootFormComponent } from './root-form/root-form.component';
import { SAdminFormComponent } from './s-admin-form/s-admin-form.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RootFormComponent,
    SAdminFormComponent,
    AdminFormComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginFormComponent },
      { path: 'root-form', component: RootFormComponent },
      { path: 's_admin-form', component: SAdminFormComponent },
      { path: 'admin-form', component: AdminFormComponent },
      { path: 'jobs', component: JobsComponent },


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
