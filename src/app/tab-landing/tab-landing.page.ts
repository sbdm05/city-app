import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab-landing',
  templateUrl: './tab-landing.page.html',
  styleUrls: ['./tab-landing.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent]
})
export class TabLandingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
