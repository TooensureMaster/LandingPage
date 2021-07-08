import { Component, OnInit } from '@angular/core';
import { Feature } from './feature.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  features: Feature[] = [
    new Feature ("../assets/img/icons/globe-solid.svg", "Website", "Build Fast, sucure, CMS based websites pre-built or custumized to fit your needs."),
    new Feature ("../assets/img/icons/umbraco-brands.svg", "CMS Intergration", "Intergrate a content manangement system into a existing website, no need to keep hiring programmer."),
    new Feature ("../assets/img/icons/github-icon.svg", "Developer", "Learn cutting edge web technology with our videos, articles courses and tutuerials free to you."),
    new Feature ("../assets/img/icons/globe-solid.svg", "Hire", "Hire the best of the best when is comes down to full stack development"),
  ];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
