import { Component, OnInit } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  currentText:number = 1;

  projectInfo:string[] = [
    "Describe your business in a few sentences.",
    "Do you currently have a website? If so, what is/isn’t working for you?",
    "What are your goals for this project?",
    "Who is your target audience?",
    "What specific features do you want on the site?",
    "How can we avoid failure?",
    "Who are your main competitors?",
    "What makes you different from your competitors?",
    "What’s the scope of the project?"
  ]

  onNextItem() {
    this.currentText++;
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
