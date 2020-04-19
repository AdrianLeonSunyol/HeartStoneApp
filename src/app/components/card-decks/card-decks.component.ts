import { Component, OnInit } from '@angular/core';
import { ICardDeckPractica2 } from 'src/app/models/ICardDeckPractica2';

@Component({
  selector: 'app-card-decks',
  templateUrl: './card-decks.component.html',
  styleUrls: ['./card-decks.component.scss'],
})
export class CardDecksComponent implements OnInit {
  public cardDecksPr2: ICardDeckPractica2[] = [];
  
  readonly mockupFile: string = '../assets/data/carddecks.json';
  selectedCDS: string[] = [];
  cartas: string[] = [];

  //inyectamos
  constructor() {}

  ngOnInit() {
    this.getData();
  }


  public getData = async () => {
    await fetch(this.mockupFile)
    .then(res => res.json())
    .then(json => {
      this.cardDecksPr2 = json as ICardDeckPractica2[];
    })
    .catch(err => {
      //print err
    });
  }

  findCartas = (name: string, action: string): void => {
    let carta: ICardDeckPractica2 = this.cardDecksPr2.find((card: ICardDeckPractica2): boolean => { return card.name === name});
    if (action === "add") {
      for (let carts of carta.cards)
        this.cartas.push(carts);
    } else {
      for (let carts of carta.cards) 
        if (this.cartas.indexOf(carts) !== -1)
          this.cartas.splice(this.cartas.indexOf(carts), 1);
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
