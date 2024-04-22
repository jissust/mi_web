import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CarrouselComponent {
  @Input() items:any;

  /*public items = [
    '/assets/img/skills/html.svg',
    '/assets/img/skills/css-3.svg',
    '/assets/img/skills/javascript.svg',
    '/assets/img/skills/nodejs.svg',
    '/assets/img/skills/angular.svg',
    '/assets/img/skills/bootstrap.svg',
    '/assets/img/skills/tailwind-css.svg',
  ]*/

  constructor(){

  }
}
