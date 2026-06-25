import { Component } from '@angular/core';

import {CdkAccordionModule} from '@angular/cdk/accordion';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-accordions',
  standalone: true,
  imports: [CdkAccordionModule],
  templateUrl: './about-accordions.component.html',
  styleUrl: './about-accordions.component.scss'
})
export class AboutAccordionsComponent {
  items_1 = [
    {
      title: 'How do I download the app?',
      content: `To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you' be re-directed to the correct page.`
    },
    {
      title: 'Can I find a nearby Scoots?',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum ad hic, natus magni, praesentium soluta in obcaecati unde quo expedita, rem officiis veritatis error repellat molestiae assumenda quod vel!`
    },
    {
      title: 'Do I need a license to ride?',
      content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum ad hic, natus magni, praesentium soluta in obcaecati unde quo expedita, rem officiis veritatis error repellat molestiae assumenda quod vel!`
    }
  ];


   items_2 = [
    {
      title: 'Should I wear a helmet?',
      content: `Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.`
    },
    {
      title: 'How about the rules & regulations?',
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum ad hic, natus magni, praesentium soluta in obcaecati unde quo expedita, rem officiis veritatis error repellat molestiae assumenda quod vel!`
    },
    {
      title: 'What if I damage my Scoot?',
      content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum ad hic, natus magni, praesentium soluta in obcaecati unde quo expedita, rem officiis veritatis error repellat molestiae assumenda quod vel!`
    }
  ];
}
