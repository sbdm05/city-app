import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DataWpService } from 'src/services/data-wp.service';
import { LocalStorageService } from 'src/services/local-storage.service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule],
})
export class Tab3Page {
  public isLoaded = false;

  public updatedStorage$ = this.localStorageService.updatedStorage;

  constructor(private localStorageService: LocalStorageService) {
    // this.dataService.updatedStorage.subscribe(data=>{
    //   console.log(data);
    // })
  }
}
