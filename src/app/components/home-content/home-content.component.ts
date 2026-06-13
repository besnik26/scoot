import { Component } from '@angular/core';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss'
})
export class HomeContentComponent {

  cards = [
    {
      "imgPath": '../../../assets/images/home/app-icon.svg',
      "title": 'Locate with app',
      "description":'Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. '
    },
    {
      "imgPath": '../../../assets/images/home/scooter-icon.svg',
      "title": 'Pick your scooter',
      "description":'We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.'
    },
    {
      "imgPath": '../../../assets/images/home/ride-icon.svg',
      "title": 'Enjoy the ride',
      "description":'Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.'
    }
  ]

}
