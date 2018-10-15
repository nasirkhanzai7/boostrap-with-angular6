
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbdTabsetBasicComponent } from './tabset-basic';
import { AppRoutingModule } from './app-routing.module';
import { NgbDateISOParserFormatter } from './ngb-date-isoparser-formatter';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule, AppRoutingModule],
  declarations: [AppComponent, NgbdTabsetBasicComponent],
  bootstrap: [AppComponent],
  providers: [{provide: NgbDateParserFormatter,
    useFactory: () => new NgbDateISOParserFormatter('dd/MM/yyyy')}, {provide: APP_BASE_HREF, useValue: ''}]
})
export class AppModule {}
