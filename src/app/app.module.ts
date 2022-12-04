import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FriendsviewComponent } from './friendsview/friendsview.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminhomeComponent,
    FriendsviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
