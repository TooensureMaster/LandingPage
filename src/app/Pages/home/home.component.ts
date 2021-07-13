import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heroContents = {
    title: "Build Your Website | Today",
    subtitle: "Fast, secure and afforable all in one solution for you. ", 
    btnText: "SHOP NOW",
    btnLink: "/store"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
