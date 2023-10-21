import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productModel';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
    // this.getSingleProduct()
  }

  getProducts(){
    this.productService.getProducts().subscribe((res: { products: Product[] }) =>{
      this.products = res.products   
      console.log("...Products...",this.products) 
    })
  }
  getSingleProduct(){
    this.productService.getProduct().subscribe((product: Product)=>{
      console.log(product)
    })
  }
}
