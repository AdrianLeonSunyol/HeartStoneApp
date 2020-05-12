import { Component, OnInit, Input } from '@angular/core';
import { CardDeck } from 'src/app/models';
import { CardService } from 'src/app/services';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() items: any[];
  @Input() listName: string;
  @Input() navigateTo: any;

  constructor() { }

  generateURL(group: string, deck: string) {
    return "/tabs/card-listing/" + group + "/" + deck;
  }
}
