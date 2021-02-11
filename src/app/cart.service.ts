import { Injectable } from "@angular/core";
import { root } from "rxjs/internal/util/root";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: root
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) {}
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
  getShipping() {
    return this.http.get("./assets/getShipping.json");
  }
}
