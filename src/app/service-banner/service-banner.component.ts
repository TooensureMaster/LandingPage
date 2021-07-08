import { Component, OnInit } from '@angular/core';
import { ServiceBanner } from './service-banner.model';

@Component({
  selector: 'app-service-banner',
  templateUrl: './service-banner.component.html',
  styleUrls: ['./service-banner.component.scss']
})
export class ServiceBannerComponent implements OnInit {
  services: ServiceBanner[] = [
    new ServiceBanner("UX Design"),
    new ServiceBanner("Website"),
    new ServiceBanner("Intergration"),
    new ServiceBanner("Learn"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
