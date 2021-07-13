import { Component } from '@angular/core';
import {Stripe} from 'stripe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ServiceApp';

  // Set your publishable key: remember to change this to your live publishable key in production
  // See your keys here: https://dashboard.stripe.com/apikeys
  // const stripe = new Stripe('pk_test_51JCD59JQpCSwe0e2iBMvPqEx0P7YdNZsieWrYHVwLqrUJbgJz81f5ktuGuemtnMEgV3nxW4DOfodP5n3tiyU0yyC00sgv3oqpm', false);
  // var stripe = Stripe('pk_test_51JCD59JQpCSwe0e2iBMvPqEx0P7YdNZsieWrYHVwLqrUJbgJz81f5ktuGuemtnMEgV3nxW4DOfodP5n3tiyU0yyC00sgv3oqpm');
  //  elements = stripe.elements();
  
}
