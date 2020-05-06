import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ICard } from 'src/app/models';
import { CardService } from 'src/app/services';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {
  public CardDeckGroup: string;
  public CardDeck: string;
  public cards: ICard[] = [];

  //public ionViewWillEnter: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    public toastController: ToastController
  ) {
    //const cardDeckGroup: Observable<string> = this.route.snapshot.params.cardDeckGroup;
    //const cardDeck: Observable<string> = this.route.snapshot.params.cardDeck;
    this.CardDeckGroup = this.route.snapshot.params.cardDeckGroup;
    this.CardDeck = this.route.snapshot.params.cardDeck;
    this.loadCards();
  }

  checkRoute = async () => {
    if (this.CardDeckGroup === "" || this.CardDeck === "") {
      const toast = await this.toastController.create({
        message: 'Por favor, en primer lugar debe de seleccionar una carta de la práctica 3. Servicios',
        position: 'top'
      });
      toast.present();
    }
  }

  loadCards = () => {
    this.checkRoute();
    this.cardService.getCardByDeck(this.CardDeckGroup, this.CardDeck).subscribe
      ((cards: ICard[]) => {
        this.cards = cards;
      });
  }
}
