import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarPanelComponent } from './car-panel/car-panel.component'

const routes: Routes = [
  { 
    path: '',
    component: CarPanelComponent,
    data:{
      breadcrumb:[
        {url:"",label:"Velocimetro"}
      ]
    } 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarPanelRoutingModule { }
