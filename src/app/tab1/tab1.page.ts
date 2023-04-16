import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {
  coll: string[] = [];
  constructor() {
    this.coll = Array.from({length:50}).map((_,i)=>`Collection ${i + 1}`);
    console.log(this.coll);
  }
}
