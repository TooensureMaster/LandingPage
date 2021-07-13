import { Component, OnInit, Input } from '@angular/core';
import { SocialMediaItem } from '../social.media.model';

@Component({
  selector: 'app-social-media-item',
  templateUrl: './social-media-item.component.html',
  styleUrls: ['./social-media-item.component.scss']
})
export class SocialMediaItemComponent implements OnInit {
  @Input() element!: SocialMediaItem;

  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
