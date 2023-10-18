import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DeliveryMethod } from '../shared/models/deliveryMethod';
import { OrderToCreate } from '../shared/models/order';

@Injectable({
  providedIn: 'root',
})
export class CheckoutRoutingService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createOrder(order: OrderToCreate) {
    return this.http.post(this.baseUrl + 'orders', order);
  }

  getDeliveryMethods() {
    return this.http
      .get<DeliveryMethod[]>(this.baseUrl + 'orders/deliveryMethods')
      .pipe(
        map((dm) => {
          return dm.sort((a, b) => b.price - a.price);
        })
      );
  }
}
