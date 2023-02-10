import { Component, OnInit } from '@angular/core';
import { CartItem } from '../Model/cart-item.model';
import { Cart } from '../Model/cart.model';
import { CartService } from '../Service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart!: Cart

  constructor(public cartService: CartService){
    // this.cartService.getCartObservable().subscribe((cart) => {
    //   this.cart = cart;
    // })
  }
  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  removeCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.course.course_id);
  }

}

