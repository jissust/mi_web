import { Component, OnInit } from '@angular/core';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CarrouselComponent],
  templateUrl: './skill.component.html',
  styleUrl:   './skill.component.css'
})
export class SkillComponent implements OnInit {
  public itemsFirst!:Array<any>;  
  public itemsSecond!:Array<any>;
  public items!:Array<any>;

  constructor(private _skill: SkillService){}

  ngOnInit(): void {
      this.items        = this._skill.gitItem();
      this.itemsFirst   = this._skill.getItemFirst();
      this.itemsSecond  = this._skill.getItemSecond();
  }
}
