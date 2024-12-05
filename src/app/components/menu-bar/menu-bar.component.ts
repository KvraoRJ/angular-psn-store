import { Component } from '@angular/core';
import { MenuBarItemComponent } from "../../components/menu-bar/menu-bar-item/menu-bar-item.component";

@Component({
  selector: 'app-menu-bar',
  imports: [MenuBarItemComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

}
