import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  NgbdTabsetBasicComponent} from './tabset-basic';

const routes: Routes = [
  { path: 'dashboard', component: NgbdTabsetBasicComponent },
  { path: '', component: NgbdTabsetBasicComponent }
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
