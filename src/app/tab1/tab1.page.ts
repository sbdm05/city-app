import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    ExploreContainerComponent,
    RouterModule,
    TranslateModule,
  ],
})
export class Tab1Page {
  public titleTab1!: string ;

  constructor(
    public translate: TranslateService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
      console.log(params['lang']);
      // condition
      if (params['lang'] == 'fr') {
        console.log('en francais');
        translate.use('fr');
      } else {
        console.log('en');
        translate.use('en');
      }
      },
    );
  }

  ngOnInit() {

  }

}
