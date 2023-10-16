import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { Observable } from 'rxjs';
import { Basket } from '../../shared/models/basket';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss'],
})
export class CheckoutReviewComponent {
  @Input() appStepper: CdkStepper;
  basket$: Observable<Basket>;

  constructor(private basketService: BasketService) {}

  createPaymentIntent() {
    return this.basketService.createPaymentIntent().subscribe(
      () => {
        this.appStepper.next();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
