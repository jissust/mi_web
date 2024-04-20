import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  stateScroll  = false;
  @HostListener('document:scroll')
  
  scrollFunction(){
    if(document.documentElement.scrollTop > 10){
      this.stateScroll = true
    }else{
      this.stateScroll = false
    }
  }
}
