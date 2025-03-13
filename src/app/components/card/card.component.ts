import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  image: string;
  href: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() href: string = '';
  @Input() skills: Array<Skill> = []
}
