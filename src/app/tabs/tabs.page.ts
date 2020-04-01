import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  readonly pages = [
    {
      title: 'Card Decks',
      url: '/tabs/cards',
      icon: 'home'
    },
    {
      title: 'Tab 2',
      url: '/tabs/tab2',
      icon: 'flash'
    },
    {
      title: 'Tab 3',
      url: '/tabs/tab3',
      icon: 'apps'
    },
    {
      title: 'About',
      url: '/tabs/about',
      icon: 'information'
    }
  ];

  constructor() {}

}
