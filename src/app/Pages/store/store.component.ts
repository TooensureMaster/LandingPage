import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  
  articles = [
    { 
      imagePath: "../../../../assets/img/template/Picture.png",
      title: "Service App",
      desc: "Promote your services, brand and much more with your service app",
      btnLink: "/contact",
      price: "39.99",
      tags: [
        "Website",
        "SPA"
      ],
    },
    { 
      imagePath: "../../../../assets/img/template/Picture.png",
      title: "Service App",
      desc: "Promote your services, brand and much more with your service app",
      btnLink: "/contact",
      price: "59.99",
      tags: [
        "Website",
        "SPA",
        "CMS"
      ],
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
