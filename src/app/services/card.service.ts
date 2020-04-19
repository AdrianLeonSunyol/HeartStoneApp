import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CardDeck, ICardDeck } from "../models";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly HS_API_URL: string = "https://omgvamp-hearthstone-v1.p.rapidapi.com";
  private readonly API_KEY: string = "91285ca99dmsh8521dc3af48668bp1a4760jsnae3e61622850";
  constructor(private http: HttpClient) { }

  private headers: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': this.API_KEY
  });

  getAllCardDecks = (): Observable<CardDeck[]> => {
    return this.http.get<CardDeck[]>(
      this.HS_API_URL + '/info', { headers: this.headers }
    );
  }
}
