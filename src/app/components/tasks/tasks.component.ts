import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks = ():void =>{
    this.productService.getProducts().subscribe((data : any)=>{
      console.log("data ni gani", data);
    })
  } 

}
