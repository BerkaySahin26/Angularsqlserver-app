import { CartItems } from './../../models/cartItems';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CartItem } from '../../models/cartItem';
import { ToastrService } from 'ngx-toastr';
import { Car } from '../../models/car';
import { NaviComponent } from '../navi/navi.component';
import { CartService } from '../../services/cart.service';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule, MatSelectModule, FormsModule,NaviComponent,],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {
  cartItems:CartItem[]=[];
  constructor(private cartService:CartService, private toastr:ToastrService){}

  ngOnInit(): void {

    this.getCart();

  }

getCart(){
  this.cartItems = this.cartService.list();
}
removeFromCart(car:Car){
  this.cartService.removeFromCart(car);
  this.toastr.error("Silindi",car.carName + "Sepetten silindi.")
}


}
