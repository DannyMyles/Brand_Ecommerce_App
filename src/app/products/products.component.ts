import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listHeaders: string[] = [
    "All category",
    "Hot offers",
    "Gift boxes",
    "Projects",
    "Menu item",
    "Help"
  ];
  constructor(private productService :ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts = ():void =>{
    this.productService.getProducts().subscribe((data : any)=>{
      console.log("data ni gani", data);
    })
  } 
}
