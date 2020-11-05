import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modules
import { CarPanelRoutingModule } from './car-panel-routing.module';
import { MatIconModule } from '@angular/material/icon';

//components
import { CarPanelComponent } from './car-panel/car-panel.component';


@NgModule({
  declarations: [CarPanelComponent],
  imports: [
    CommonModule,
    CarPanelRoutingModule,
    MatIconModule
  ]

})
export class CarPanelModule { }
