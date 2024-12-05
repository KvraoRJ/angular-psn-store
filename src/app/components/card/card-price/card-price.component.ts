import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-price',
  imports: [],
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.css'
})
export class CardPriceComponent {
	@Input()
	gameType:string="Digital PS5"
	@Input()
	gamePrice:string="R$ 100,00"
	@Input()
	gameMessage:string="Play it now"
}
