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

  constructor(){

  }
}
