import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FriendsviewComponent } from './friendsview/friendsview.component';
import { CourseviewComponent } from './courseview/courseview.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { EmphomeComponent } from './emphome/emphome.component';
import { AddfriendComponent } from './addfriend/addfriend.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminhomeComponent,
    FriendsviewComponent,
    CourseviewComponent,
    NavadminComponent,
    EmploginComponent,
    EmphomeComponent,
    AddfriendComponent
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
