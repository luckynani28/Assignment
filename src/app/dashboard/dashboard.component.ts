import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public cartServiceService: CartServiceService) { }
 
  ngOnInit(): void {
  }
  addToCart(i) {
    console.log(i);
    this.cartServiceService.count += 1;
    this.cartTotal();
  }

  cartTotal() {
    return this.cartServiceService.count;
  }


}
