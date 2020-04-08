import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardDecksComponent } from './card-decks.component';

describe('CardDecksComponent', () => {
  let component: CardDecksComponent;
  let fixture: ComponentFixture<CardDecksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDecksComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
