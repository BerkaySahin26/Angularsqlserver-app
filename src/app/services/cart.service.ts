import { CartItem } from './../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Car } from './../models/car';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(car:Car){
    let item = CartItems.find(c=> c.car.id==car.id);
    if(item)
    {
      item.quantity+=1;
    }else
    {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem)
    }
  }
  list():CartItem []{
    return CartItems;
  }
  removeFromCart(car:Car){
    let item : CartItem = CartItems.find(c=>c.car.id==car.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }
}
