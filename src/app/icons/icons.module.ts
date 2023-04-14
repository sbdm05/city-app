import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonIcon } from '@ionic/angular';
import { LikeIconPage } from './components/like-icon/like-icon.page';



@NgModule({
  declarations: [
    LikeIconPage
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LikeIconPage
  ]
})
export class IconsModule { }
