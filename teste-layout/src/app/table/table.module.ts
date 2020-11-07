import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';


import { TableRoutingModule } from './table-routing.module';
import { TableService } from '../shared/services/table.service';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TableRoutingModule 
  ],
  providers: [
    TableService
  ]
})
export class TableModule { }
