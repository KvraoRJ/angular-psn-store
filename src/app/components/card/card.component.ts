import { Component, Input } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPriceComponent } from "./card-price/card-price.component";

@Component({
  selector: 'app-card',
  imports: [CardLabelComponent, CardPriceComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
	@Input()
	gameCover:string="assets/bt-5.jpg"
	@Input()
	gameLabel:string=""
	@Input()
	gameType:string="Digital PS5"
	@Input()
	gamePrice:string="R$ 100,00"
	@Input()
	gameMessage:string="Play it now"
}
