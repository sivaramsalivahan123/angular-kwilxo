import { Injectable } from "@angular/core";
import { root } from "rxjs/internal/util/root";

@Injectable({
  providedIn: root
})
export class CartService {
  items = [];
  constructor() {}
  //adding into Cart
  addCart(product) {
    this.items.push(product);
    console.log("Item came to cart CartService");
  }
  //fetching itemds
  getCart() {
    return this.items;
  }
  //clearing CartService
  clearCart() {
    this.items = [];
    return this.items;
  }
}
