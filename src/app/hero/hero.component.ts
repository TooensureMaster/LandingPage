import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() element!: {title: string, subtitle: string, btnText?: string, btnLink?: string};
  constructor() { }

  ngOnInit(): void {
  }

}
