import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('inputRef')
  inputElementRef!: ElementRef;

  listHeaders: string[] = [
    "All category",
    "Hot offers",
    "Gift boxes",
    "Projects",
    "Menu item",
    "Help"
  ];
  ngAfterViewInit(): void {
    this.inputElementRef.nativeElement.focus()
    console.log(this.inputElementRef)
  }
  
  ngOnInit(): void {
  }

}
