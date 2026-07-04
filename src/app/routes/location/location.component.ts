import { Component } from '@angular/core';
import { SecondaryHeroComponent } from '../../components/secondary-hero/secondary-hero.component';
import { LocationContentComponent } from '../../components/location-content/location-content.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [SecondaryHeroComponent, LocationContentComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {

}
