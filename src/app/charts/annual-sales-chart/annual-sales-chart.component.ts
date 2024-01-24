import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
  
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from "chart.js";

import { SummaryService } from '../../summary.service';

@Component({
  selector: 'app-annual-sales-chart',
  standalone: true,
  imports: [CommonModule,NgChartsModule],
  templateUrl: './annual-sales-chart.component.html',
  styleUrl: './annual-sales-chart.component.scss'
})
export class AnnualSalesChartComponent  {
  public isBrowser: boolean;
 title = 'sales';

 constructor(private summaryService: SummaryService , @Inject(PLATFORM_ID) platformId: Object) {
  this.isBrowser = isPlatformBrowser(platformId);
 }

 
public lineChartData: ChartConfiguration<'bar'>['data'] = {
  labels: this.prepareLabels(),
  datasets: this.prepareDatasets()
};

public lineChartLegend = true;
 
// le label est l'extraction des mois à partir des dates des commandes
prepareLabels(): any[]  {
const labels:any[]=[]

this.summaryService.getOrders().subscribe((data) => {
  
  data.map((order)=>{
    const d = Number(order.createdAt.$date.$numberLong);
    const mois = new Date(d).getMonth() + 1;
      labels.push(mois)
     })
  })
  //supprimer les valeurs redondantes array javascript
  const uniqueArr = [...new Set(labels)]
  
  //trier
  const res=  uniqueArr.slice().sort((a, b) => a - b);
 
return res;
}

prepareDatasets(): any[]  {
  const datasets: any[]=[] ;
  this.summaryService.getOrders().subscribe((data) => {
    
   data.map((order)=>{
      const salesData = order.allProduct.map((product:any) => product.quantitiy);
      datasets.push({
        data: salesData, 
        label: `Order ${order.id}`,
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: `rgba(${Math.floor(
          Math.random() * 256
        )},${Math.floor(Math.random() * 256)},${Math.floor(
          Math.random() * 256
        )},0.3)`,
      });
    })
  })
  return datasets;
}

}
