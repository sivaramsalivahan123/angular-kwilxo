import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartservice: CartService
  ) {}

  ngOnInit() {
    const routerParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routerParams.get("productId"));
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  onAdd(product) {
    this.cartservice.addCart(product);
    alert("Item added to your cart");
    console.log("Item added to Cart service");
  }
}
