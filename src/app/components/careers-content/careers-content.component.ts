import { Component } from '@angular/core';

@Component({
  selector: 'app-careers-content',
  standalone: true,
  imports: [],
  templateUrl: './careers-content.component.html',
  styleUrl: './careers-content.component.scss'
})
export class CareersContentComponent {

  jobs= [
    {
      title: 'General Manager',
      location:'Jakarta, Indonesia'
    },
    {
      title: 'UI/UX Designer',
      location:'Yokohoma, Japan'
    },
    {
      title: 'Blog Content Copywriter',
      location:'New York, United States'
    },
    {
      title: 'Graphic Designer',
      location:'New York, United States'
    },
    {
      title: 'Fleet Supervisor',
      location:'Jakarta, Indonesia'
    },
    {
      title: 'UX Analyst',
      location:'London, United Kingdom'
    }
  ]

}
