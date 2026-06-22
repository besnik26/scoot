import { Component } from '@angular/core';
import { SecondaryHeroComponent } from '../../components/secondary-hero/secondary-hero.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [SecondaryHeroComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {

}
