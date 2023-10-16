import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketTotals } from '../../models/basket';
import { BasketService } from '../../../basket/basket.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss'],
})
export class OrderTotalsComponent {
  constructor(public basketService: BasketService) {}
}
