
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CardListPageComponent } from './card-list-page.component';
import { CardListComponent } from '../card-list/card-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: CardListPageComponent }])
  ],
  declarations: [CardListPageComponent, CardListComponent],
})
export class CardListPageModule {
  constructor() { }
}
