import { DataShareService } from './../services/data-share.service';
import { PersonService } from './../services/person.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonItemComponent } from './person-list/person-item/person-item.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { MissingPageComponent } from './missing-page/missing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    PersonListComponent,
    PersonItemComponent,
    PersonDetailsComponent,
    MissingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    PersonService,
    DataShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
