import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { DOCUMENT } from "@angular/common";
import { Component, HostListener, Inject, OnInit } from "@angular/core";
import * as $ from 'jquery';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  animations: [
    trigger("fade", [
      state("open", style({ opacity: 1, display: "block" })),
      state("close", style({ opacity: 0, display: "none" })),
      transition("close => open", [animate(300)]),
      transition("open => close", [animate("300ms 100ms")])

      // transition(':enter', [
      //   style({ opacity: 0 }),
      //   animate('1s', style({ opacity: 1 })),
      // ]),
      // transition(':leave', [
      //   animate('1s', style({ opacity: 0 }))
      // ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isActive = false;

  constructor(@Inject(DOCUMENT) document) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])

  onWindowScroll(e) {
    if (window.pageYOffset > 500) {
      let element = document.getElementById("navbar");
      element.classList.add("fixed-top");
      element.classList.add("scrolled-nav");
    } else {
      let element = document.getElementById("navbar");
      element.classList.remove("fixed-top");
      element.classList.remove("scrolled-nav");
    }
  }
  
  toggleMenu() {
    this.isActive = !this.isActive;

    if (this.isActive === true) {
      document.body.classList.add("nav-active");

    } else {
      document.body.classList.remove("nav-active");
      // document.getElementById("navbarMenu").classList.remove("show");

    }

  }

  offset() {
    return $('#navbar').height();
    
  }
  

  
}
