import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  { 
    path: '',
    component: FormsComponent,
    data:{
      breadcrumb:[
        {url:"",label:"Formularios"}
      ]
    } 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
