import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CardDecksComponent } from "./card-decks.component";
import { CardDeckComponent } from '../card-deck/card-deck.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: CardDecksComponent }])
  ],
  declarations: [CardDecksComponent, CardDeckComponent],
})
export class CardDecksModule {
  constructor() {}
}
