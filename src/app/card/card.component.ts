import { Component , OnInit  } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatMenuModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  cartData: any;
  totalQuantity?: number;
  totalPrice?: number;
  totalRecords?: number;

  constructor(private summaryService: SummaryService) { }

  ngOnInit(): void {
    this.summaryService.getCartData().subscribe(data => {
      this.cartData = data;
      this.totalQuantity = this.summaryService.calculateTotalQuantity(data);
      this.totalPrice = this.summaryService.calculateTotalPrice(data);
      this.totalRecords = this.summaryService.calculateTotalRecords(data);
    });
  }

}
