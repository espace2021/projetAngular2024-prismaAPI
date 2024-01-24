import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../card/card.component';
import { AnnualSalesChartComponent } from '../charts/annual-sales-chart/annual-sales-chart.component';
import { OrdersTableComponent } from '../orders-table/orders-table.component';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CardComponent,
    AnnualSalesChartComponent,
    OrdersTableComponent
  ]
})
export class DashComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Monthly State', cols: 1, rows: 1 },
          { title: 'Sales Chart', cols: 1, rows: 1 },
          { title: 'Orders Table', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Monthly State', cols: 2, rows: 1 },
        { title: 'Sales Chart', cols: 2, rows: 1 },
        { title: 'Orders Table', cols: 2, rows: 1 }
      ];
    })
  );
}
