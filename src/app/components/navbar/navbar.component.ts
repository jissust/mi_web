import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLinkActive, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit{
  stateScroll  = false;
  public option!: string;
  
  constructor(private route: ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.route.fragment
    .pipe()
    .subscribe({
      next: (element) => {
        this.option = 'home';
        if(element != null){
          this.option = element;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  @HostListener('document:scroll')

  scrollFunction(){
    if(document.documentElement.scrollTop > 10){
      this.stateScroll = true
    }else{
      this.stateScroll = false
    }
  }

  selectOption(option: string){
    this.option = option;
  }
}
