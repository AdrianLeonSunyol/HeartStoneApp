import { ICardBase } from './ICardBase';

export interface ICardDeck extends ICardBase {
    name: string;
    types: string[];
}
