import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab-faq',
  templateUrl: './tab-faq.page.html',
  styleUrls: ['./tab-faq.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TabFaqPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
