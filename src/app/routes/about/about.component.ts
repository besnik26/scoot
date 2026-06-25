import { Component } from '@angular/core';
import { SecondaryHeroComponent } from '../../components/secondary-hero/secondary-hero.component';
import { AboutContentComponent } from '../../components/about-content/about-content.component';
import { AboutAccordionsComponent } from '../../components/about-accordions/about-accordions.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SecondaryHeroComponent, AboutContentComponent, AboutAccordionsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
