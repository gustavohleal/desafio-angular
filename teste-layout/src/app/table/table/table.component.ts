import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { TableService } from 'src/app/shared/services/table.service';
import { Table } from 'src/app/shared/interfaces/TableInterface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  private tableMemoryRelease;

  table:Array<Table>;
  tableKeys:Array<string> = [];

  constructor(
    private router : Router,
    private tableService : TableService
  ) { }

  ngOnInit(): void {


    this.tableMemoryRelease = this.tableService.getTable()
      .subscribe((result:Array<Table>) => {
        this.table = result;
        this.table.forEach(table => {
          Object.keys(table).forEach(key => {
            this.tableKeys.push(key);
          })
        });        
        this.tableKeys = [...new Set(this.tableKeys)];
      })
      .add(()=>{
        this.tableMemoryRelease.unsubscribe();
      })
  }

}
