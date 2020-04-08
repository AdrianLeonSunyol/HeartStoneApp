import { Component, OnInit } from '@angular/core';
import { CardDeck } from '../models';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.component.html',
  styleUrls: ['./card-decks.component.scss'],
})
export class CardDecksComponent implements OnInit {
  readonly mockupFile: string = '../assets/data/carddecks.json';
  cardDecks: CardDeck[];
  selectedCDS: string[] = [];
  cartas: string[] = [];

  constructor() {}

  ngOnInit() {
    this.getData();
  }

  public getData = async () => {
    await fetch(this.mockupFile)
    .then(res => res.json())
    .then(json => {
      this.cardDecks = json as CardDeck[];
    })
    .catch(err => {
      //print err
    });
  }

  findCartas = (name: string, action: string): void => {
    if (action === "add") {
      this.cardDecks.find((card: CardDeck) => {
        if (card.name === name) {
          for (let carta of card.cards) 
            this.cartas.push(carta);
        }
      });
    } else {
      this.cardDecks.find((card: CardDeck) => {
        if (card.name === name) {
          for (let carta of card.cards) 
            if (this.cartas.indexOf(carta) !== -1)
              this.cartas.splice(this.cartas.indexOf(carta), 1);
        }
      });
    }
  } 

  public select = (name: string) => {
    var esta = this.selectedCDS.indexOf(name);
    if (esta === -1) {
      this.selectedCDS.push(name);
      this.findCartas(name, "add");
    } else {
      this.selectedCDS.splice(esta, 1);
      this.findCartas(name, "remove");
    } 
  }

}
