import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService :ProductService) { }

  ngOnInit(): void {
  }

  getTasks = ():void =>{
    this.productService.getProducts().subscribe((data : any)=>{
      console.log("data ni gani", data);
    })
  } 
}