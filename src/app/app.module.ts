import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-modal';

import { AppComponent } from './app.component';
import { Bucketlist } from './models/bucketlist';
import { Item } from './models/item';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { BucketlistService } from './services/bucketlist/bucketlist.service';
import { ItemService } from './services/item/item.service';
import { AlertService } from './services/alert/alert.service';
import { AuthGuard } from './guards/auth.guard';
import { routing } from './app.routing';
import { AlertComponent } from './components/alert/alert.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BucketlistComponent } from './components/bucketlist/bucketlist.component';
import { ItemComponent } from './components/item/item.component';
import { EditBucketlistComponent } from './components/bucketlist/edit-bucketlist/edit-bucketlist.component';
import { AddItemComponent } from './components/item/add-item/add-item.component';
import { EditItemComponent } from './components/item/edit-item/edit-item.component';
import { SearchBucketlistsComponent } from './components/search-bucketlists/search-bucketlists.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    DashboardComponent,
    BucketlistComponent,
    ItemComponent,
    EditBucketlistComponent,
    AddItemComponent,
    EditItemComponent,
    SearchBucketlistsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    routing,
    ModalModule
  ],
  providers: [
    AlertService,
    BucketlistService,
    AuthenticationService,
    ItemService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
