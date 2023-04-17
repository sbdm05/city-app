import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mock-icon',
  templateUrl: './mock-icon.page.html',
  styleUrls: ['./mock-icon.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MockIconPage implements OnInit {

  @Input() iconName!: string;

  constructor() { }

  ngOnInit() {
    if (this.iconName === 'HEBERGEMENT') {
      this.iconName = 'home';
    } else if (this.iconName === 'BIEN-ETRE') {
      this.iconName = 'rose';
    } else if (this.iconName === 'MAGASIN') {
      this.iconName = 'basket';
    }
  }

}
