import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({disable: 'mobile'});
    AOS.refresh();
  }
}
