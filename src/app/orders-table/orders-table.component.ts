import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { SummaryService } from '../summary.service';
import {NgClass} from '@angular/common'
export interface OrdersTableItem {
  
  id: number;
  amount: number;
  status : string
}

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [MatTableModule,NgClass],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.scss'
})
export class OrdersTableComponent {

  constructor(private summaryService :SummaryService) {
   }

   fetchData (){
    const dataTable:OrdersTableItem[] =[]
    this.summaryService.getOrders().subscribe((data:any) => {
       data.map((item:any) => {
        dataTable.push({id:item.id,amount:item.amount,status:item.status})
      })
     
    })  ;
    return dataTable
  }

  displayedColumns: string[] = ['id', 'amount', 'status'];
  dataSource = this.fetchData ();

}
