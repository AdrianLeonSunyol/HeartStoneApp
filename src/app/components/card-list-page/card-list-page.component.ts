import { Component } from '@angular/core';
import { CardDeck } from 'src/app/models';
import { CardService } from 'src/app/services';

@Component({
  selector: 'app-card-list-page',
  templateUrl: './card-list-page.component.html',
  styleUrls: ['./card-list-page.component.scss'],
})
export class CardListPageComponent {
  private readonly ALLOWED_DECKS = [
    'classes',
    'factions',
    'qualities',
    'types',
    'races'
  ];

  public cardDecks: CardDeck[] = [];

  constructor(private cardSrv: CardService) {
    this.getCardDecks();
  }

  private extractAllowedDecks(cardDecks: CardDeck[]) {
    this.ALLOWED_DECKS.forEach((deckName: string) => {
      this.cardDecks.push({ name: deckName, types: cardDecks[deckName] })
    })
  }

  private getCardDecks = async () => {
    console.log("que pasa");
    this.cardSrv.getAllCardDecks().subscribe(
      (cdSrv: CardDeck[]) => {
        this.extractAllowedDecks(cdSrv);
      }
    );
  }
}
