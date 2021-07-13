import { Component, OnInit } from '@angular/core';
import { SocialMediaItem } from './social.media.model';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  
  facebook:SocialMediaItem = new SocialMediaItem("facebook","https://www.facebook.com/tooensure/","../assets/img/social-media/facebook-square-brands.svg","#385898");
  twitter:SocialMediaItem = new SocialMediaItem("Twitter", "https://www.twitter.com/tooensure/", "../assets/img/social-media/twitter-square-brands.svg", "#1DA1F2");
  youtube:SocialMediaItem = new SocialMediaItem("Youtube", "https://www.youtube.com/channel/youtube-brands.svg", "../assets/img//social-media/youtube-brands.svg", "#FF0000");
  instagram:SocialMediaItem = new SocialMediaItem("Instagram", "https://www.instagram.com/tooensurellc/", "../assets/img/social-media/instagram-square-brands (1).svg", "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)");

  socialElement:SocialMediaItem[] = [
    this.facebook,
    this.twitter,
    this.youtube,
    this.instagram
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
