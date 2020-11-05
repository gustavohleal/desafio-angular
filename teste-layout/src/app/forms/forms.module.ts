import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FormsComponent } from './forms/forms.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormService } from '../shared/services/form.service'



@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    FormService
  ]
})
export class FormsModule { }
