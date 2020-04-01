import { Component } from '@angular/core';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.component.html',
  styleUrls: ['./card-decks.component.scss'],
})
export class CardDecksComponent {
  readonly cardDecks: string [] = [
    `Druid`,
    `Mage`,
    `Warrior`,
    `Rogue`,
    `Shaman`
  ];
  constructor() {}
}
