import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { HomeContentComponent } from '../../components/home-content/home-content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, HomeContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
