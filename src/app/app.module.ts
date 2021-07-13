import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FeatureComponent } from './feature/feature.component';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { ServiceBannerComponent } from './service-banner/service-banner.component';
import { PromoteBannerComponent } from './promote-banner/promote-banner.component';
import { FeatureItemComponent } from './feature/feature-item/feature-item.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SocialMediaItemComponent } from './social-media/social-media-item/social-media-item.component';
import { EditorComponent } from './editor/editor.component';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { StoreComponent } from './Pages/store/store.component';
import { LearnComponent } from './Pages/learn/learn.component';
import { HeroComponent } from './hero/hero.component';
import { BottomNavComponent } from './Layout/footer/bottom-nav/bottom-nav.component';
import { PreviewCardComponent } from './Layout/Main/preview-card/preview-card.component';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeatureComponent,
    PageBannerComponent,
    ServiceBannerComponent,
    PromoteBannerComponent,
    FeatureItemComponent,
    SocialMediaComponent,
    SocialMediaItemComponent,
    EditorComponent,
    HomeComponent,
    ContactComponent,
    StoreComponent,
    LearnComponent,
    HeroComponent,
    BottomNavComponent,
    PreviewCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStripeModule.forRoot('***your-stripe-publishable-key***')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
