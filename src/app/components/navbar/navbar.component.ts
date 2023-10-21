import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  listHeaders: string[] = [
    "All category",
    "Hot offers",
    "Gift boxes",
    "Projects",
    "Menu item",
    "Help"
  ];
  
  ngOnInit(): void {
  }

}
