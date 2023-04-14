import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataWpService } from './data-wp.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public updatedStorage: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  ) ;

  constructor(private dataService: DataWpService) {
    // console.log('local storage service');
    if (localStorage.getItem('data')) {
      const arr = JSON.parse(localStorage.getItem('data') ?? '[]')
      this.updatedStorage.next(arr);
    }
  }

  // public onCheck(dataList: any[]) {
  //   let reponse: any[] = [];
  //   let tempReponse: any[] = [];
  //   let tempObj: any;

  //   if (localStorage.getItem('data')) {
  //     // console.log(JSON.parse(localStorage.getItem('data') || '{}'));
  //     this.updatedstorage = JSON.parse(localStorage.getItem('data') || '[]');
  //     // console.log(this.updatedstorage, 'inside constructor');
  //     this.updatedstorage.forEach((item) => {
  //       tempReponse = dataList.filter((i) => item.id === i.id);
  //       console.log(tempReponse, 'réponse');
  //       tempObj = tempReponse[0]
  //       reponse.push(tempObj);

  //       // change isLikedProperty
  //       //reponse.forEach(item=> item.isLiked = !item.isLiked);
  //     });
  //     console.log(reponse);
  //     return reponse;
  //   }
  //   return;
  // }

  public saveItem2(item: any) {
    const { obj, state } = item;
    console.log(item)
    // store the value as a []
    let updatedStorageValue = this.updatedStorage.value;

    if (state === 'clicked' && obj) {
      // console.log(obj, 'obj');
      // vérifier si obj déjà enregistré dans le localStorage
      const alreadySaved = updatedStorageValue.find(
        (item) => item.id === obj.id
      );

      if (alreadySaved) {
        console.log('already exist');
        return;
      }

      // change isLiked
      obj.isLiked = true;

      console.log(updatedStorageValue, 'tableau mis à jour');

      updatedStorageValue = [...updatedStorageValue];
      localStorage.setItem('data', JSON.stringify(updatedStorageValue));
      // save dans le hot obs
      this.updatedStorage.next(updatedStorageValue);
      //this.dataService.updatedDatas.next(updatedStorageValue);
    } else if (state === 'unclicked') {
      // retrouver l'objet dans le tableau et le retirer
      const id = obj.id;
      console.log(id);

      // change isLiked
      obj.isLiked = false;
      console.log(obj, 'obj');

      const filteredTab = updatedStorageValue.filter(
        (item) => item.id !== obj.id
      );
      console.log(filteredTab);

      // save the new localStorage
      localStorage.setItem('data', JSON.stringify(filteredTab));
      // save dans le hot obs
      this.updatedStorage.next(filteredTab);
      //this.dataService.updatedDatas.next(filteredTab);
    }
  }

  public saveItem(obj: any) {
    // save dans local Storage
    localStorage.setItem('data', JSON.stringify([obj]));
  }
}
