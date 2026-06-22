import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-secondary-hero',
  standalone: true,
  imports: [NgClass],
  templateUrl: './secondary-hero.component.html',
  styleUrl: './secondary-hero.component.scss'
})
export class SecondaryHeroComponent {
  @Input() title? :string = '';
  @Input() className? :string = '';

}
