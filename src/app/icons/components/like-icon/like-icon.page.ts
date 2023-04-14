import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-like-icon',
  templateUrl: './like-icon.page.html',
  styleUrls: ['./like-icon.page.scss'],
})
export class LikeIconPage implements OnInit {
  @Output() submitted = new EventEmitter();
  @Input() item: any;
  public iconName = 'heart-outline';

  constructor() {

  }

  ngOnInit() {
    // console.log(this.item.isLiked);

    if (this.item.isLiked === true) {
      this.iconName = 'heart';
    } else if (!this.item.isLiked) {
      this.iconName = 'heart-outline';
    }
  }

  ngOnChanges(){
  //  console.log(this.item);

  //  if (this.item.isLiked === true) {
  //    this.iconName = 'heart';
  //  } else if (!this.item.isLiked) {
  //    this.iconName = 'heart-outline';
  //  }
  }

  onClick() {
    // this.iconName = 'heart'
    // this.submitted.next({item : this.item, state: 'unclicked'});

    // condition ?
    if (this.iconName === 'heart') {
      this.iconName = 'heart-outline';
      this.submitted.next({ obj: this.item, state: 'unclicked' });
    } else {
      this.iconName = 'heart';
      this.submitted.next({ obj: this.item, state: 'clicked' });
    }
  }
}
