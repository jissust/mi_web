import { Component } from '@angular/core';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CarrouselComponent],
  templateUrl: './skill.component.html',
  styleUrl:   './skill.component.css'
})
export class SkillComponent {
  public itemsFirst = [
    '/assets/img/skills/html.svg',
    '/assets/img/skills/css-3.svg',
    '/assets/img/skills/javascript.svg',
    '/assets/img/skills/nodejs.svg',
    '/assets/img/skills/angular.svg',
    '/assets/img/skills/bootstrap.svg',
    '/assets/img/skills/tailwind-css.svg',
  ]  
  public itemsSecond = [
    '/assets/img/skills/postgresql.svg',
    '/assets/img/skills/php.svg',
    '/assets/img/skills/docker.svg',
    '/assets/img/skills/laravel.svg',
    '/assets/img/skills/mongodb.svg',
    '/assets/img/skills/mysql-logo.svg',
    '/assets/img/skills/figma.svg',
  ]
}
