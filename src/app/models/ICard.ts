import { ICardBase } from './ICardBase';

export interface ICard extends ICardBase {
  text: string;
  cardId: string;
  cardSet: string;
  collectible: boolean;
  img: string;
  imgGold: string;
  name: string;

  cost: number;
  attack: number;
  health: number;
  rarity: string;
  type: string;

  dbfId: string;
  faction: string;
  playerclass: string;
  locale: string;
} 