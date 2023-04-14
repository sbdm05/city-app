import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DataWpService } from 'src/services/data-wp.service';
import { LocalStorageService } from 'src/services/local-storage.service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IconsModule } from '../icons/icons.module';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, CommonModule, IconsModule],
})
export class Tab2Page {
  public dates_july = [
    {
      day_literal: '27',
      month_literal: 'juillet',
      search_date: '2024-07-27',
      isChosen: false,
    },
    {
      day_literal: '28',
      month_literal: 'juillet',
      search_date: '2024-07-28',
      isChosen: false,
    },
    {
      day_literal: '29',
      month_literal: 'juillet',
      search_date: '2024-07-29',
      isChosen: false,
    },
    {
      day_literal: '30',
      month_literal: 'juillet',
      search_date: '2024-07-30',
      isChosen: false,
    },
    {
      day_literal: '31',
      month_literal: 'juillet',
      search_date: '2024-07-31',
      isChosen: false,
    },
  ];
  public dates_august = [
    {
      day_literal: '1',
      month_literal: 'août',
      search_date: '2024-08-01',
      isChosen: false,
    },
    {
      day_literal: '2',
      month_literal: 'août',
      search_date: '2024-08-02',
      isChosen: false,
    },
    {
      day_literal: '3',
      month_literal: 'août',
      search_date: '2024-08-03',
      isChosen: false,
    },
    {
      day_literal: '4',
      month_literal: 'août',
      search_date: '2024-08-04',
      isChosen: false,
    },
    {
      day_literal: '5',
      month_literal: 'août',
      search_date: '2024-08-05',
      isChosen: false,
    },
  ];

  public isChosen: boolean = false;

  // public datas!: any;

  public filteredEvents!: any;

  public isLoaded = false;

  public storage!: any[];

  public updatedTab$ = this.dataService.updatedDatas;

  public updatedDB: any;

  constructor(
    private dataService: DataWpService,
    private localStorageService: LocalStorageService
  ) {
    // récupérer la bdd
    this.storage = JSON.parse(localStorage.getItem('data') || '[]');
    this.dataService.getAllEvents().subscribe((datas) => {
      // si présent dans localstorage, alors, item.isLiked = true;
      datas.forEach((item: any) => {
        const matchObj = this.storage.find((e: any) => item.id === e.id);
        //  console.log(matchObj);
        if (matchObj) {
          item.isLiked = true;
        }
      });

      // contient le tableau d'objets
      this.updatedDB = datas;

      this.dataService.updatedDatas.next(datas);

      this.isLoaded = true;
    });
  }

  onUpdateData(item: any) {
    const { obj, status } = item;
    this.storage = JSON.parse(localStorage.getItem('data') || '[]');

    // Parcourir le localStorage pour voir si je trouve item
    const findItem = this.storage.find((el) => el.id === obj.id);

    if (findItem) {
      // retrouver et retirer du localStorage
      this.storage = this.storage.filter(
        (item: any) => item.id !== findItem.id
      );
      if (this.storage.length > 0) {
        localStorage.setItem('data', JSON.stringify(this.storage));
        this.localStorageService.updatedStorage.next(this.storage);
      } else {
        localStorage.removeItem('data');
        this.localStorageService.updatedStorage.next([]);
      }

      // actualiser le tableau de données
      this.updatedDB.forEach((item: any) => {
        let matchObj = this.updatedDB.find((e: any) => findItem.id === e.id);
        //  console.log(matchObj);
        if (matchObj) {
          item.isLiked = false;
        }
      });

      this.dataService.updatedDatas.next(this.updatedDB);
    } else {
      // ajouter au localStorage
      this.storage.push(obj);
      localStorage.setItem('data', JSON.stringify(this.storage));
      this.localStorageService.updatedStorage.next(this.storage);
      // actualiser le tableau de données
      this.updatedDB.forEach((item: any) => {
        let matchObj = this.updatedDB.find((e: any) => item.id === e.id);

        if (matchObj) {
          item.isLiked = true;
        }
      });

      this.dataService.updatedDatas.next(this.updatedDB);
    }
  }

  public onSearchByDateJuly(i: any) {
    this.isLoaded = false;
    this.dates_july.forEach((i) => {
      i.isChosen = false;
    });
    this.dates_august.forEach((i) => {
      i.isChosen = false;
    });
    i.isChosen = true;
    // appel vers service avec recherche par date
    this.dataService.getEventByDate(i).subscribe((events) => {
      events.forEach((item: any) => {
        const matchObj = this.storage.find((e: any) => item.id === e.id);

        if (matchObj) {
          item.isLiked = true;
        } else {
          item.isLiked = false;
        }
      });

      this.isLoaded = true;
      this.filteredEvents = events;
    });
  }

  public onSearchByDateAugust(i: any) {
    this.isLoaded = false;
    this.dates_july.forEach((i) => {
      i.isChosen = false;
    });
    this.dates_august.forEach((i) => {
      i.isChosen = false;
    });
    i.isChosen = true;
    console.log(i);
    // appel vers service avec recherche par date
    this.dataService.getEventByDate(i).subscribe((events) => {
      events.forEach((item: any) => {
        const matchObj = this.storage.find((e: any) => item.id === e.id);
        console.log(matchObj);
        if (matchObj) {
          item.isLiked = true;
        } else {
          item.isLiked = false;
        }
      });
      console.log(events, 'by date');
      this.isLoaded = true;
      this.filteredEvents = events;
    });
  }

  onLike(item: any) {
    // appel à un service
    // this.localStorage.updatedStorage.next();
    this.onUpdateData(item);
  }
}
