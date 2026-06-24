import { Component } from '@angular/core';
import { SecondaryHeroComponent } from '../../components/secondary-hero/secondary-hero.component';
import { AboutContentComponent } from '../../components/about-content/about-content.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SecondaryHeroComponent, AboutContentComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
