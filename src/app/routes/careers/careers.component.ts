import { Component } from '@angular/core';
import { SecondaryHeroComponent } from '../../components/secondary-hero/secondary-hero.component';
import { CareersContentComponent } from '../../components/careers-content/careers-content.component';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [SecondaryHeroComponent, CareersContentComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {

}
